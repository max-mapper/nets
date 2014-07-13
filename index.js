var req = require('request')

module.exports = Nets

function Nets(uri, opts, cb) {
  return req(uri, opts, cb)
}
