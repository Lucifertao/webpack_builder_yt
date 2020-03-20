beforeAll(() => {
    const path = require('path')
    const templatePath = path.join(process.cwd(), './test/smoke/template');
    process.chdir(templatePath)
});
test('webpack.dev.js test case', () => {
    console.log(process.cwd())
    const baseConfig = require('../../lib/webpack.dev')
    expect(baseConfig.devtool).toEqual('sourceMap')
    expect(baseConfig.mode).toEqual('development')
});
