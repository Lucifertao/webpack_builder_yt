test('webpack.dev.js test case', () => {
    const baseConfig = require('../../lib/webpack.dev')
    expect(baseConfig.devtool).toEqual('sourceMap')
    expect(baseConfig.mode).toEqual('development')
});
