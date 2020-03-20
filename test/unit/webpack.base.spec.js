test('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base')
    expect(baseConfig.entry.index).toContain('/src/index/index.js')
});
