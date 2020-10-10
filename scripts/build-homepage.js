const fs = require('fs');
fs.copyFileSync("src/homepage/index.html", "dist/index.html");
fs.mkdirSync("dist/images", { recursive: true });
fs.copyFileSync("src/homepage/images/comingsoon.gif", "dist/images/comingsoon.gif");