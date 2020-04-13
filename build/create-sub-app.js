const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const downloadGitRepo = require('download-git-repo');

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
  createSubApp(userAnswer.name);
  // 创建子项目路由文件
  createRouteFile(userAnswer.name);
  // 写入到路由文件
  writeRoute(userAnswer.name);
  // 下载子项目
  const filePath = path.resolve(__dirname, '../../' + userAnswer.name);
  console.log('子项目文件下载中...');
  await downloadFile('fisher-zh/micro-spa-sub', filePath);
  // 替换子项目字段

  console.log('子项目初始化完成')
}

/**
 * 创建子项目文件夹
 * @param {String} subAppName 新建子项目的名称
 */
function createSubApp (subAppName) {
  const filePath = path.resolve(__dirname, '../../' + subAppName)
  fs.mkdirSync(filePath);
}

/**
 * 创建包含子项目的路由文件
 * @param {String} subAppName 新建子项目的名称
 */
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

/**
 * 写入路由文件数据
 * @param {String} subAppName 新建子项目的名称
 */
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
  const routerObject = `{
    path: '/${fileName}',
    name: '${componentName}All',
    component: ${componentName},
    meta: {
      isAuth: true,
      keepAlive: false,
      isSubApp: true
    }
  }`
  const newFileString =
    routesFileString.replace('/* insert route file */', `import ${componentName} from '../view/${fileName}';\n/* insert route file */`)
    .replace('/* insert route object */', `, ${routerObject}/* insert route object */`);
  const result = fs.writeFileSync(path.resolve(__dirname, '../src/router/sub-app-router.js'), newFileString);
  if (result) {
    console.log('写入路由失败');
    console.log(result);
  }
}

/**
 *
 * @param {String} gitrepo git地址
 * @param {String} path 文件路径
 */
const downloadFile = function (gitrepo, path) {
  return new Promise((resolve, reject) => {
    downloadGitRepo(gitrepo, path, function (err) {
      if (err) {
        console.log('下载失败')
        console.log(err);
        reject(err);
      }
      resolve();
    })
  })

}

run();
