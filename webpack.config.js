var path = require("path");
var opn = require('opn')
module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
var uri = 'http://localhost:8080/pudding.html'
opn(uri)
