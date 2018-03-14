'use strict';

module.exports = (options = {}) => {
  // 将键值对的键名变小写
  const optionHeaders = Object.keys(options).reduce((headers, key) => {
    headers[key.toLowerCase()] = options[key];
    return headers;
  }, {});

  // 抽取键名
  const optionsHeaderKeys = Object.keys(optionHeaders);

  return async (ctx, next) => {
    await next();

    const response = ctx.response;
    const headers = response.headers;

    for (const key of optionsHeaderKeys) {
      if (!headers[key]) {
        response.set(key, optionHeaders[key]);
      }
    }
  };
};
