const fs = require('fs');
fs.rmdirSync("dist", { recursive: true });
fs.mkdirSync("dist", { recursive: true });
