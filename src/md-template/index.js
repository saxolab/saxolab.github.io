const fs = require('fs');
const path = require("path");

const TITLE = "<!--Title-->";
const CONTENTS = "<!--Contents-->";
const file = "./index.html";
const template = fs.readFileSync(path.resolve(__dirname, file), 'utf-8');

module.exports = (title, content) => template.replace(TITLE, title).replace(CONTENTS, content);