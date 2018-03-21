'use strict';

module.exports = app => {
  app.get('/', function() {
    this.body = '';
  });

  app.get('/o', function() {
    this.set('POweRed-by', 'not xadillax');
    this.set('NoThInG', 'is impossible');
    this.body = '';
  });
};
