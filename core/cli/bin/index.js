#! usr/bin/env node
console.log('1111111')
const log =require('zz-cli-dev-log');
const importLocal = require('import-local');
if(importLocal(__filename)){
    log.info('cli',"正在使用zz-cli-dev本地版本")
}else{
    require('../lib/index.js')(process.argv.slice(2))
}