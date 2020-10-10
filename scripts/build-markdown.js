const remarkable = require('remarkable');
const hljs = require('highlight.js');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const markdownTemplate = require('../src/md-template');
// Actual default values
const markdown = new remarkable.Remarkable('full',{
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer:  true,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
        console.error(err);
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {
      console.error(err);
    }

    return ''; // use external default escaping
  }
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
    const content = fs.readFileSync(file, 'utf-8');
    const converted = markdown.render(content).toString('utf8');
    const targetFile = file.replace("src", "dist");
    const targetDir = path.dirname(targetFile);
    const fileName = targetFile.split("/").pop().split(".md")[0]

    fs.mkdirSync(targetDir, { recursive: true });

    fs.writeFileSync(targetFile.replace(".md", ".html"), markdownTemplate(fileName, converted));
  })
})();
