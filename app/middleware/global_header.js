'use strict';

module.exports = (options = {}) => {
  const _tmp = options.set || {};
  const _setKeys = Object.keys(_tmp);
  const _set = _setKeys.reduce((ret, key, idx) => {
    ret[key.toLowerCase()] = _tmp[key];
    _setKeys[idx] = key.toLowerCase();
    return ret;
  }, {});

  return async (ctx, next) => {
    await next();

    const response = ctx.response;
    const headers = response.headers;

    for (const key of _setKeys) {
      if (!headers[key]) {
        response.set(key, _set[key]);
      }
    }
  };
};
