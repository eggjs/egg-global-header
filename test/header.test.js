'use strict';

const assert = require('assert');

const mm = require('egg-mock');
const request = require('supertest');

describe('test/header.test.js', () => {
  describe('with header config', () => {
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
      assert(app.config.coreMiddleware.includes('globalHeader'));
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

  describe('with no header config', () => {
    let app;
    before(async function() {
      app = mm.app({
        baseDir: 'apps/no_header',
      });
      await app.ready();
    });

    after(() => app.close());

    afterEach(mm.restore);

    it('should have no this middleware', () => {
      assert(!app.config.coreMiddleware.includes('globalHeader'));
    });
  });
});
