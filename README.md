# ClickShare Utilities
An unofficial ClickShare utility package for NodeJS

## Installation

Using npm:
```shell
$ npm i --save clickshare-utils
```

In Node.js:
```js
const clickshare = require('clickshare-utils');
// Load the constructor to create multiple base units.

const Baseunit = clickshare.Baseunit;
let baseunitOne = new Baseunit('127.0.0.1');

// Search for different Base Units - discovery is a singleton.
const discovery = clickshare.discovery;
discovery.on('up', function(ip) {
  console.log('found a ClickShare on ip: '+ip);
});
discovery.start();

// Set up a proxy to a Base Unit API at port 1000.
const Proxy = clickshare.Proxy;
let proxyOne = new Proxy('127.0.0.1',1000);
proxyOne.start();
```
