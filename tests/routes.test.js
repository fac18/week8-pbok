const test = require('tape');
const request = require('supertest');
const app = require('../src/app.js');

test("Test home route", t => {
    request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            t.error(err, "Error is null");
            t.equal(res.statusCode, 200, "Should return 200");
            t.end();
        });
});

test("Test library route", t => {
    request(app)
        .get('/library')
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Error is null');
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();
        });
});
