# nets

Mac/Linux | Windows
------------ | --------------
[![Travis](http://img.shields.io/travis/maxogden/nets.svg?style=flat)](https://travis-ci.org/maxogden/nets) | [![Build status](http://ci.appveyor.com/api/projects/status/vo5hdm5sdwaf7ss2)](https://ci.appveyor.com/project/maxogden/nets)

nothin but nets. http client that works in node and browsers

uses [xhr](https://www.npmjs.org/package/xhr) for browsers and [request](https://www.npmjs.org/package/request) for node

#### get

```js
var nets = require("nets")

nets({ url: "http://placekitten.com/g/400/400" }, function(err, resp, body) {
  // body is a Buffer containing the image
})
```

Note that `nets` returns data as [`Buffer`](http://nodejs.org/api/buffer.html)s by default, in both node and in browsers. You can pass `{encoding: undefined}` to turn this off.

#### post

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
