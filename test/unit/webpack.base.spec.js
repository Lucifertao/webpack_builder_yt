test('webpack.base.js test case', () => {
    const path = require('path')
    const absPath = path.join(process.cwd(), './test/smoke/template')
    process.chdir(absPath)
    const baseConfig = require('../../lib/webpack.base')
    expect(baseConfig.entry.index).toContain('/src/index/index.js')
});
