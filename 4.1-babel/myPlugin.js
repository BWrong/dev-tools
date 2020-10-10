module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        console.log(path.node)
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}