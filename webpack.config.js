const devModule = require('./webpack/dev')
const prodModule = require('./webpack/prod')
let finalModule = {}

switch (process.env.NODE_ENV) {
  case 'dev':
    finalModule = devModule
    break
  case 'prod':
    finalModule = prodModule
    break
  default:
    break
}
 
module.exports = finalModule