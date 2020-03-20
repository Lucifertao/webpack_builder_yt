const glob = require('glob');
/* eslint-disable no-undef */
test('Checking html files', () => {
  const files = glob.sync('./src/*/index.html');
  expect(files.length).not.toBeNull();
});
