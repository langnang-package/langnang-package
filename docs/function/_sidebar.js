const fs = require("fs");

let files = fs.readdirSync(__dirname);

files = files.filter((v) => v[0] !== "_" && v.substr(0, 6) !== "README");
module.exports = {
  title: "Function",
  path: "/function/",
  collapsable: false,
  sidebarDepth: 1,
  children: files.map((v) => "/function/" + v),
};
