const glob = require('glob');

/* eslint-disable no-undef */
test('Checking js files', () => {
  const files = glob.sync('./dist/*/index/*.js');
  expect(files.length).not.toBeNull();
});

test('Checking lib/js files', () => {
  const files = glob.sync('./dist/*/lib/*.js');
  expect(files.length).not.toBeNull();
});
