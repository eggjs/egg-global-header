'use strict';

module.exports = app => {
  if (app.config.globalHeader && Object.keys(app.config.globalHeader).length) {
    app.config.coreMiddleware.push('globalHeader');
  }
};
