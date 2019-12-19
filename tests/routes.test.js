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
            t.equals(typeof res, 'object', 'Result should be an object');
            t.end();
        });
});

test("Test 404 error is being served correctly", t => {
    request(app)
        .get("/blah")
        .expect(404)
        .end((err, res) => {
            t.error(err, "Error is null");
            t.equals(404, res.statusCode, "Should return 404");
            t.end();
        });
});

test('Testing endpoint /library/:language', t => {
    request(app)
        .get('/library/html')
        .expect(200)
        .end((err, res) => {
            t.error(err, 'Error is null');
            t.equals(res.statusCode, 200, 'Should return a 200 status code');
            t.end();
        });
});