import React , { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory,Redirect,IndexRedirect } from 'react-router'


import App from './view/App';
import Home from './view/Home/Home'
import Page from './view/Page'

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path=":page" component={Page} />
    </Route>
  </Router>
);



// import React , { Component } from 'react';
// import { Router, Route, hashHistory,IndexRoute,browserHistory,Redirect,IndexRedirect } from 'react-router'

// import App from './view/App'
// import Home from './view/Home/Home'
// import Login  from './view/Login/Login'
// import NoMatch from './view/NoMatch/NoMatch'

// import ProductList from './view/Product/List'
// import ProductDetail from './view/Product/Detail'

// import Cart from './view/Cart'

// import OrderIndex from './view/Order/Index'

// export default (
//     <Route path="/" component={App}>
//         <IndexRedirect to="/home"/>
//         <Route path="home" component={Home}/>
//         <Route path="product">
//             <Route path="list" component={ProductList}/>
//             <Route path="detail/:id" component={ProductDetail}/>
//         </Route>
//         <Route path="cart" component={Cart}/>
//         <Route path="order">
//             <Route path="index" component={OrderIndex}/>
//         </Route>
//         <Route path="login" component={Login}/>
//         <Route path="*" component={NoMatch}/>
//     </Route>
// );