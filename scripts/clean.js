const fs = require('fs');
if (fs.existsSync("dist")) {
  fs.rmdirSync("dist", { recursive: true });
}

fs.mkdirSync("dist", { recursive: true });
