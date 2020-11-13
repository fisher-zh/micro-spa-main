/**
 * 挂载子应用文件
 * @param {*} jsArray js地址合集
 * @param {*} cssArray css地址合集
 */
function loadModule (jsArray, cssArray) {
  console.log('插入js文件-----start');
  for (let i = 0; i < jsArray.length; i++) {
    loadJs(jsArray[i]);
  }
  console.log('插入js文件-----end');
  console.log('插入css文件-----start');
  for (let i = 0; i < cssArray.length; i++) {
    loadCss(cssArray[i]);
  }
  console.log('插入css文件-----end');
}

/**
 * 挂载js
 * @param {string} jsLink  js地址
 */
function loadJs (jsLink) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = jsLink;
  document.getElementsByTagName('body')[0].appendChild(script);
}

/**
 * 挂载css
 * @param {*} cssLink css地址
 */
function loadCss (cssLink) {
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', cssLink);
  document.getElementsByTagName('head')[0].appendChild(style);
}

export default loadModule;
