/**
 *
 * @param {string} moduleName 模块名称
 */
function removeModule (moduleName) {
  const allLink = document.querySelectorAll('link');
  const allScript = document.querySelectorAll('script');
  for (let i = 0; i < allLink.length; i++) {
    if (moduleName === allLink[i].getAttribute('module-name')) {
      document.getElementsByTagName('head')[0].removeChild(allLink[i]);
    }
  };
  for (let i = 0; i < allScript.length; i++) {
    if (moduleName === allScript[i].getAttribute('module-name')) {
      document.getElementsByTagName('body')[0].removeChild(allScript[i]);
    }
  };
}

export default removeModule;
