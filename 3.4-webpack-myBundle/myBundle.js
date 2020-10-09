const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');
/**
 * 获取模块信息
 * @param {*} file
 */
const getModuleInfo = (file) => {
	const content = fs.readFileSync(file, 'utf-8');
	const ast = parser.parse(content, {
		sourceType: 'module'
  });
  const dependencies = {};
	traverse(ast, {
		ImportDeclaration({ node }) {
			const dirname = path.dirname(file);
			const newFile = '.'+ path.sep + path.join(dirname, node.source.value);
			dependencies[node.source.value] = newFile;
		}
  });
  const { code } = babel.transformFromAst(ast, null, {
		presets: ['@babel/preset-env']
  });
  const moduleInfo = { file, dependencies, code };
	return moduleInfo;
};
/**
 * 获取依赖关系表
 * @param {*} entry
 */
const generDepsGraph = (entry) => {
	const entryModule = getModuleInfo(entry);
	const graphArray = [ entryModule ];
	for(let i = 0; i < graphArray.length; i++) {
		const item = graphArray[i];
		const { dependencies } = item;
		if(dependencies) {
			for(let j in dependencies) {
				graphArray.push(
					getModuleInfo(dependencies[j])
				);
			}
		}
	}
	const graph = {};
	graphArray.forEach(item => {
		graph[item.file] = {
			dependencies: item.dependencies,
			code: item.code
		};
	});
	return graph;
};
/**
 * 构建
 * @param {*} entry
 */
const build = (entry) => {
	const graph = JSON.stringify(generDepsGraph(entry));
	return `
		(function(graph){
			function require(module) {
				function localRequire(relativePath) {
					return require(graph[module].dependencies[relativePath]);
				}
				var exports = {};
				(function(require, exports, code){
					eval(code)
				})(localRequire, exports, graph[module].code);
				return exports;
			};
			require('${entry}')
		})(${graph});
	`;
};

const code = build('./src/index.js');
fs.mkdirSync('./dist');
fs.writeFileSync('./dist/bundle.js', code);