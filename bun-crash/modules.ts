// import path from "path"
const path = require("path");

const filepath = path.join("boo", "ooo", "image.png");
const filename = path.basename(filepath);

console.log(filename);
