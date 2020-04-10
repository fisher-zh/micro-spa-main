const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const run = async () => {
  let userAnswer = null;
  await inquirer.prompt([{
    name: 'name',
    type: 'input',
    message: '子项目名称: ',
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
    userAnswer = answer;
  })

  // 创建子项目文件夹
  // createSubApp(userAnswer.name);

  // 创建子项目路由文件
  // createRouteFile(userAnswer.name);

  // 写入到路由文件
  writeRoute(userAnswer.name);
}

// 填写参数


// 绑定数据


function createSubApp (subAppName) {
  const filePath = path.resolve(__dirname, '../../' + subAppName)
  fs.mkdirSync(filePath);
}

function createRouteFile (subAppName) {
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

function writeRoute (subAppName) {
  const routesFile = fs.readFileSync(path.resolve(__dirname, '../src/router/sub-app-router.js'));
  const routesFileString = routesFile.toString();
  const fileName = subAppName;
  const arr = fileName.split('-');
  let componentName = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      componentName += arr[i];
    } else {
      let stringNameKey = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
      componentName += stringNameKey;
    }
  }
  const newFileString = routesFileString.replace('/* insert route file */', `import ${componentName} from '../view/${fileName}';\n/* insert route file */`);
  console.log(newFileString);
  // const result = fs.writeFileSync(path.resolve(__dirname, '../src/router/sub-app-router.js'), newFileString);
  // if (result) {
  //   console.log('写入路由失败');
  //   console.log(result);
  // }
}

run();
