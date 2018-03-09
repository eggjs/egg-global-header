'use strict';

const mm = require('egg-mock');
const request = require('supertest');

describe('test/header.test.js', () => {
  let app;
  before(async function() {
    app = mm.app({
      baseDir: 'apps/header',
    });
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should get header set by plugin', async function() {
    await request(app.callback())
      .get('/')
      .expect('powered-by', 'xadillax')
      .expect('cache-control', 'no-cache')
      .expect(200);
  });

  it('should be overwritten', async function() {
    await request(app.callback())
      .get('/o')
      .expect('powered-by', 'not xadillax')
      .expect('cache-control', 'no-cache')
      .expect('nothing', 'is impossible')
      .expect(200);
  });
});
