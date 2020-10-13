const path = require('path');
const fs = require('fs');
const config = require('../config');

const arguments = process.argv.splice(2);
const env = arguments[0] || 'dev';
let publicPath = '';
let devDirString = '';
if (env === 'dev') {
  devDirString = '../public/';
  publicPath = config.dev.publicPath;
} else {
  devDirString = '../dist/';
  publicPath = config.build.publicPath;
}

const devDir = path.resolve(__dirname,  devDirString + 'sub-app');
const dirList = fs.readdirSync(devDir);

const modulejsList = [];
const reg = /^module\.[0-9]+\.js$/;
for (let i = 0; i < dirList.length; i++) {
  const appDir = path.resolve(__dirname, devDirString + 'sub-app/' + dirList[i]);
  const appFileList = fs.readdirSync(appDir);
  console.log(appFileList);
  for (let j = 0; j < appFileList.length; j++) {
    if (reg.test(appFileList[j])) {
      modulejsList.push(`<script src="${publicPath}sub-app/${dirList[i]}/${appFileList[j]}"></script>`);
    }
  }
}

const htmlPath = path.resolve(__dirname,  devDirString + 'index.html');
const fileHtml = fs.readFileSync(htmlPath);
const fileHtmlString = fileHtml.toString();
const newFile = fileHtmlString.replace(/<!-- module sub-app start -->[\s\S]*<!-- module sub-app end -->/, `<!-- module sub-app start -->\n${modulejsList.join('\n')}\n<!-- module sub-app end -->`);
fs.writeFileSync(path.resolve(__dirname,  devDirString + 'index.html'), newFile);
