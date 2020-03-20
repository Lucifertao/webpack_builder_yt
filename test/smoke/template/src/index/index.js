import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { sum } from '../utils/methods';
import './index.less';

class Search extends React.Component {
  constructor() {
    super();
    this._ = _;
    this.$ = $;
  }

  render() {
    return (
      <div onClick={this.test}>
        Index1
        {sum(1, 200000)}
      </div>
    );
  }
}
// 这里因为没有使用 sum 的返回值，所以在打包后是没有这段代码的
ReactDOM.render(<Search />, document.getElementById('app'));

if (module.hot) {
  // 必须手动触发，否则依然会刷新浏览器
  // 热更新原理
  /*
    1. webpack compile 将 js 编译成 Bundle
    2. HMR Server 将热更新文件输出给 HMR Runtime
    3. Bundle Server 提供文件在浏览器访问
    4. HMR Runtime 会被注入到浏览器，更新文件的变化
    5. bundle.js 构建输出的文件
    */
  module.hot.accept();
}
