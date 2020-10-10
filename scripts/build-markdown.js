const remarkable = require('remarkable');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

// Actual default values
const markdown = new remarkable.Remarkable({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (/*str, lang*/) { return ''; }
});

const getAllMarkdowns = async function (src) {
  return new Promise((resolve, reject) => {
    glob(src + '/**/*.md', (err, res) => {
      if(err){
        reject(err);
      }
      resolve(res);
    });
  });
};

(async () => {
  const files = await getAllMarkdowns("src");
  console.log(files);
  files.forEach(file => {
    console.log(file);
    const content = fs.readFileSync(file, 'utf-8');
    const converted = markdown.render(content);
    const targetFile = file.replace("src", "dist");
    const targetDir = path.dirname(targetFile);

    fs.mkdirSync(targetDir, { recursive: true });

    fs.writeFileSync(targetFile, converted);
    // console.log(content);
  })
  console.log(markdown.render('# Remarkable rulezz!'));
})();