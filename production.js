const path = require('path');
const Application = require('thinkjs');
// const fs = require('fs');

// const runtimeDir = path.join(__dirname, 'runtime');

// // 检查runtime目录是否存在
// if (!fs.existsSync(runtimeDir)) {
//   // 由于使用了mountpoints，这里不需要手动创建目录
//   console.log('Runtime directory does not exist, but it will be created by pkg.');
// }
const instance = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: path.join(__dirname, 'app'),
  proxy: true, // use proxy
  env: 'production'
});

instance.run();
