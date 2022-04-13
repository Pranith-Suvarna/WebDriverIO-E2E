const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

baseUrl : 'http://rahulshettyacademyUAT.com',
waitforTimeout: 10000,

mochOpts: {
    ui:'bdd',
    timeout: 60000,
    grep:"sanity"
},

})