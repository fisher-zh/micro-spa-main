const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const run = async () => {
  await inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: 'sub app name: ',
    default: 'sub-app',
    validate: (value) => {
      const reg = /^[a-z][a-z-]*[a-z]$/;
      if (reg.test(value)) {
        return true;
      } else {
        return '子项目名称应为小写字母，单词间以 - 分隔';
      }
    }
  }]).then(answer => {

  })

  // 创建子项目文件夹
  // createSubApp();

  // 创建子项目路由文件
  // createRouteFile();

  // 写入到路由文件
  // writeRoute()
}

// 填写参数


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

run();
