const glob = require('glob');

/* eslint-disable no-undef */
test('Checking css files', () => {
  const files = glob.sync('./dist/*/index/*.css');
  expect(files.length).not.toBeNull();
});
