const fs = require('fs');
if (fs.existsSync("dist")) {
  fs.rmdirSync("dist", { recursive: true, force: true });
}

fs.mkdirSync("dist", { recursive: true });
