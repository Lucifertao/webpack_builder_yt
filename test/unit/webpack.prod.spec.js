test('webpack.prod.js test case', () => {
    const path = require('path')
    const templatePath = path.join(process.cwd(), './test/smoke/template');
    process.chdir(templatePath)
    const baseConfig = require('../../lib/webpack.prod')
    const { version } = require(path.join(templatePath, './package.json'))
    const expectPath = path.join(templatePath, `./dist/${version}`)
    expect(baseConfig.output.path).toEqual(expectPath)
    expect(baseConfig.devtool).toEqual('none')
    expect(baseConfig.mode).toEqual('production')
});
