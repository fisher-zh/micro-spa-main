const fs = require('fs');
const path = require('path');

function CoayFolder(target, dest) {
  fs.readdir(target, function (err, paths) {
    if (err) {
      throw err;
    }

    paths.forEach(function (path) {
      var _target = target + '/' + path,
        _dest = dest + '/' + path,
        readable, writable;

      fs.stat(_target, function (err, st) {
        if (err) {
          throw err;
        }

        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          readable = fs.createReadStream(_target);
          // 创建写入流
          writable = fs.createWriteStream(_dest);
          // 通过管道来传输流
          readable.pipe(writable);
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          CoayFolder(_target, _dest);
        }
      })
    })
  })
}

const target = path.join(__dirname, '../dist');
const dest = path.join(__dirname, '../public/sub-app');
CoayFolder(target, dest);