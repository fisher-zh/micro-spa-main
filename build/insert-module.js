const fs = require('fs');
const path = require('path');

console.log('开始读取文件---------------');
// 需要读取模块列表
const moduleList = {
  'sub-app-1': true,
}
const modulePath = path.resolve(__dirname, '../public/module-lib');
// script标签链接
let scriptStr = '';

console.log('读取文件列表...');
const files = fs.readdirSync(modulePath)
for (let i = 0; i < files.length; i++) {
  const name = files[i].split('.')[0];
  let script = '';
  if (moduleList[name]) {
    script = '<script src="./module-lib/' + files[i] + '"></script>';
    scriptStr += script;
  }
}

console.log('读取html文件...');
// index.html文件读取
const htmlPath = path.resolve(__dirname, '../public/index.html');
// 读取文件内容
let htmlData = fs.readFileSync(htmlPath, 'utf-8');
console.log(htmlData);
htmlData = htmlData.replace('<!-- module files will be auto injected -->', scriptStr);
console.log(htmlData);
console.log('写入html文件...');
fs.writeFile(htmlPath, htmlData, function (err, ) {
  if (err) {
    console.log('写入html文件失败');
    throw err;
  }
  console.log('插入标签完成---------------');
})
