[![NPM version](https://badge.fury.io/js/less-plugin-inline-urls.svg)](http://badge.fury.io/js/less-plugin-inline-urls) [![Dependencies](https://david-dm.org/less/less-plugin-inline-urls.svg)](https://david-dm.org/less/less-plugin-inline-urls) [![devDependency Status](https://david-dm.org/less/less-plugin-inline-urls/dev-status.svg)](https://david-dm.org/less/less-plugin-inline-urls#info=devDependencies) [![optionalDependency Status](https://david-dm.org/less/less-plugin-inline-urls/optional-status.svg)](https://david-dm.org/less/less-plugin-inline-urls#info=optionalDependencies)

less-plugin-inline-urls
=======================

Converts url("image.png") to data-uri's automatically, without having to write data-uri("image.png") in your less

## lessc usage

```
npm install -g less-plugin-inline-urls
```

and then on the command line,

```
lessc file.less --inline-urls
```

## Programmatic usage

```
var inline-urls-plugin = require('less-plugin-inline-urls');
less.render(lessString, { plugins: [inline-urls-plugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time and is blocked on data-uri which does not work in the browser (not sure why you would want it to).
