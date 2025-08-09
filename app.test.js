const assert = require('assert');
const { main } = require('./app');

assert.strictEqual(main(), 'Hello World');

console.log('app.test.js passed');
