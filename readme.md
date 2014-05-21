# nets

Travis    | Browsers (WIP) 
------------ | --------------
[![Travis](http://img.shields.io/travis/maxogden/nets.svg?style=flat)](https://travis-ci.org/maxogden/nets) | [![testling badge](https://ci.testling.com/maxogden/nets.png)](https://ci.testling.com/maxogden/nets)


nothin but nets. http client that works in node and browsers

uses https://www.npmjs.org/package/request for browsers and https://www.npmjs.org/package/request for node


```js
var nets = require("nets")

nets({
    body: '{"foo": "bar"}',
    url: "/foo",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}, function (err, resp, body) {

})
```
