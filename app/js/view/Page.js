import React from 'react';
import {
  View,
  NavBar,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

// import Home from './Home/Home'
import Login from './Login/Login'
import My from './My/index'
import TestPapers from './TestPapers/TestPapers'
import Doing from './TestPapers/Doing'

// const pages = {
//   Login,
// };

const pages ={
  Login:{name:Login,title:"登陆"},
  My:{name:My,title:'我的练习'},
  TestPapers:{name:TestPapers,title:'专项练习'},
  Doing:{name:Doing,title:'专项练习'}
}

export default class Page extends React.Component {
  render() {

    let page = this.props.params.page;
    // 使用 query
    if (page) {
      page = page.charAt(0).toUpperCase() + page.slice(1);
    } 
    // console.log(pages[page]);
    const Component = pages[page].name || NotFound;
    const backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      to: '/',
      onlyActiveOnIndex: true,
    };

    return (
      <View>
        <NavBar
          title={pages[page].title}
          leftNav={[backNav]}
          amStyle="primary"
        />
        <Component scrollable />
      </View>
    );
  }
}
