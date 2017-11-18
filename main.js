module.exports.install = function (Vue) {
  Vue.component('trianglify', require('./src/Trianglify'))
}

module.exports.Trianglify = require('./src/Trianglify')
