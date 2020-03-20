import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import * as utils from '../utils/methods';

// import $ from 'jquery'
// 这里因为没有使用所以会被 tree shaking
import './index.less';

class Search extends React.Component {
  constructor() {
    super();
    this._ = _;
  }

    handleClick = () => {
    }

    render() {
      return (
        <div onClick={this.handleClick}>
          Search
          {utils.sum(1, 200000)}
        </div>
      );
      // return <div>Search1</div>
    }
}
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
