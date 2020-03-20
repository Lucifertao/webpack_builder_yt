test('webpack.prod.js test case', () => {
    const path = require('path')
    const templatePath = path.join(process.cwd(), './test/smoke/template');
    process.chdir(templatePath)
    const baseConfig = require('../../lib/webpack.prod')
    const { version } = require(path.join(templatePath, './package.json'))
    expect(baseConfig.output.path).toContain(`dist/${version}`)
    expect(baseConfig.devtool).toEqual('none')
    expect(baseConfig.mode).toEqual('production')
});
