const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

// const name = argv.name;
// console.log(argv);
const name = 'test-app';
if (!name) {
  console.log('请在参数中包含name参数');
  return;
}
const reg = /^[a-z]+-[a-z]+$/;
if (!reg.test(name)) {
  console.log('子项目名称应为多个小写字母并以 “-” 分隔，例如：sub-app');
  return;
}
const subAppName = name;

// 创建子项目文件夹
createSubApp()

// 创建子项目路由文件
// createRouteFile();

// 写入到路由文件
writeRoute();

// 绑定数据


function createSubApp () {
  const filePath = path.resolve(__dirname, '../../' + subAppName)
  fs.mkdirSync(filePath);
}

function createRouteFile () {
  // 读取Vue文件模板
  const VueTemplate = fs.readFileSync(path.resolve(__dirname, '../public/template/sub-app.vue'));
  const VueTemplateString = VueTemplate.toString()
  const fileString = VueTemplateString.replace(/sub-app/g, subAppName)
  // 创建vue文件
  const result = fs.writeFileSync(path.resolve(__dirname, '../src/view/' + subAppName + '.vue'), fileString);
  if (result) {
    console.log('子项目路由文件创建失败');
    console.log(result);
  }
}

function writeRoute () {
  const routesFile = fs.readFileSync(path.resolve(__dirname, '../src/router/sub-app-router.js'));
  const routesFileString = routesFile.toString();
}
