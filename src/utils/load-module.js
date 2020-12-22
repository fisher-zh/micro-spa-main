/**
 * 挂载子应用文件
 * @param {array} jsArray js地址合集
 * @param {array} cssArray css地址合集
 */
async function loadModule (jsArray, cssArray, moduleName) {
  console.log('插入并加载css文件-----start' + new Date().getTime());
  for (let i = 0; i < cssArray.length; i++) {
    await loadCss(cssArray[i], moduleName);
  }
  console.log('插入并加载css文件-----end');

  console.log('插入并加载js文件-----start' + new Date().getTime());
  for (let i = 0; i < jsArray.length; i++) {
    await loadJs(jsArray[i], moduleName);
  }
  console.log('插入并加载js文件-----end');
}

/**
 * 挂载js
 * @param {string} jsLink  js地址
 */
function loadJs (jsLink, moduleName) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = jsLink;
    script.setAttribute('module-name', moduleName);
    script.onload = () => {
      console.log('load success' + new Date().getTime());
      resolve('load success');
    };
    document.getElementsByTagName('body')[0].appendChild(script);
  });
}

/**
 * 挂载css
 * @param {*} cssLink css地址
 */
function loadCss (cssLink, moduleName) {
  return new Promise((resolve, reject) => {
    const style = document.createElement('link');
    style.setAttribute('type', 'text/css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', cssLink);
    style.setAttribute('module-name', moduleName);
    style.onload = () => {
      console.log('load success' + new Date().getTime());
      resolve('load success');
    };
    document.getElementsByTagName('head')[0].appendChild(style);
  });
}

export default loadModule;
