beforeAll(() => {
    const path = require('path')
    const templatePath = path.join(process.cwd(), './test/smoke/template');
    process.chdir(templatePath)
});
test('webpack.base.js test case', () => {
    console.log(process.cwd())
    const baseConfig = require('../../lib/webpack.base')
    expect(baseConfig.entry.index).toContain('test/smoke/template/src/index/index.js')
});
