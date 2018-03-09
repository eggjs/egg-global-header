# egg-global-header

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-global-header.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-global-header
[travis-image]: https://img.shields.io/travis/eggjs/egg-global-header.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-global-header
[codecov-image]: https://codecov.io/github/eggjs/egg-global-header/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/eggjs/egg-global-header?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-global-header.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-global-header
[snyk-image]: https://snyk.io/test/npm/egg-global-header/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-global-header
[download-image]: https://img.shields.io/npm/dm/egg-global-header.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-global-header

Egg plugin for setting response header globally.

## Install

```bash
$ npm install --save egg-global-header
```

## Usage

```js
// {app_root}/config/plugin.js
exports.globalHeader = {
  enable: true,
  package: 'egg-global-header',
};
```

## Configuration

Set the response key-value pairs in `set` field of the plugin configuration:

```js
// {app_root}/config/config.default.js
exports.globalHeader = {
  set: {
    'Powered-by': '23333',
    'Cache-Control': 'no-cache',
  }
};
```

> **Hint:** The header set by **egg-global-header** won't overwrite existing response header(s).
>
> E.g. if you set `Powered-by` in other place (maybe in controller or other plugins), then your own `Powered-by` header
> will be responsed.

## Questions && Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
