## Webpack 配置详解

### 基础配置：webpack.base.js

1. 资源解析

2. 样式管理
   1. css 前缀补齐
   2. css px 自动转 rem
   
3. 目录清理

4. 多页面打包

5. 命令行优化

6. 构建错误捕获处理

7. css 抽离单文件（根据使用情况决定）

   

### 开发环境：webpack.dev.js

1. 代码热更新
   1. css 热更新
   2. js 热更新
2. sourceMap

### 生产环境：webpack.prod.js

1. 代码压缩 webpack4 production 开启
2. 文件指纹 hash
3. Tree shaking 生产环境默认开启
4. Scope hositing 生产环境默认开启
5. 打包速度优化
   1. 基础服务 CDN，让公共库资源不参与打包，只打包业务文件
   2. dll
6. 打包体积优化
   1. 代码分割--splitChunks
   2. 懒加载 js，依赖 babel 插件