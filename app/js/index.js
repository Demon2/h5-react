import React , { Component } from 'react';
import { render } from 'react-dom';
import { Router , applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';//解决TOUCH设备上300ms延迟
import useScroll from 'react-router-scroll';
import {fromJS} from 'immutable'

import configureStore from './store/configureStore';
import history from './store/history'
import routes from './routes';
import DevTools from './components/DevTools';

import '../../node_modules/amazeui-touch/dist/amazeui.touch.css'
import '../style/main.less';
import '../style/iconfont.less';

injectTapEventPlugin();

window.__INITIAL_STATE__ = fromJS(window.__INITIAL_STATE__);

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, history);
// __DEVELOPMENT__ && __DEVTOOLS__
console.log(__DEVELOPMENT__);
console.log(__DEVTOOLS__);
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    setTimeout(() => render(
        <DevTools store={store}/>,
        window.document.body.appendChild(document.createElement('div'))
    ), 20)
}

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} render={applyRouterMiddleware(useScroll())}>
                    {routes}
                </Router>
            </Provider>
        );
    }
};

render(<Index/>, document.getElementById('root'));