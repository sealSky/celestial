import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import Route from './router/router'
import store from './store/store'

// 共js
import './utils/setRem.ts'
// 公共样式
import './style/_reset.scss'

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}
render(Route)
serviceWorker.unregister();
