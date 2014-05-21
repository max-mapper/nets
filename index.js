var req = require('request')

module.exports = Nets

function Nets(uri, opts, cb) {
  req(uri, opts, cb)
}