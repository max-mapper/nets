# nets

Mac/Linux | Windows | Browsers 
------------ | -------------- | --------------
[![Travis](http://img.shields.io/travis/maxogden/nets.svg?style=flat)](https://travis-ci.org/maxogden/nets) | [![Build status](http://ci.appveyor.com/api/projects/status/vo5hdm5sdwaf7ss2)](https://ci.appveyor.com/project/maxogden/nets) | [![testling badge](https://ci.testling.com/maxogden/nets.png)](https://ci.testling.com/maxogden/nets)


nothin but nets. http client that works in node and browsers

uses [xhr](https://www.npmjs.org/package/xhr) for browsers and [request](https://www.npmjs.org/package/request) for node


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
