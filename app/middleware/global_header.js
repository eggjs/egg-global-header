'use strict';

module.exports = (options = {}) => {
  // lowercase key-value pairs' keys
  const optionHeaders = {};
  const optionHeaderKeys = [];
  for (const key of Object.keys(options)) {
    const lower = key.toLowerCase();
    optionHeaders[lower] = options[key];
    optionHeaderKeys.push(lower);
  }

  return async function globalHeaderMiddleware(ctx, next) {
    await next();

    const response = ctx.response;
    const headers = response.headers;

    for (const key of optionHeaderKeys) {
      if (!(key in headers)) {
        response.set(key, optionHeaders[key]);
      }
    }
  };
};
