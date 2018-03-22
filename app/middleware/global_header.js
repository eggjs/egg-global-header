'use strict';

module.exports = (options = {}) => {
  // lowercase key-value pairs' keys
  const optionHeaders = {};
  for (const key in options) {
    optionHeaders[key.toLowerCase()] = options[key];
  }

  return async function globalHeaderMiddleware(ctx, next) {
    await next();

    const response = ctx.response;
    const headers = response.headers;

    for (const key in optionHeaders) {
      if (!headers[key]) {
        response.set(key, optionHeaders[key]);
      }
    }
  };
};
