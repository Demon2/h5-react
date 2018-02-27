import React , { Component } from 'react';
import Transition from 'react-addons-css-transition-group'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import LocalStorageServer from '../server/LocalStorageServer'
import {Container,TabBar} from 'amazeui-touch'
import Loading from '../components/Loading'
import * as LoginActions from '../actions/login'
import * as TokenActions from '../actions/token'


const mapStateToProps = state=> {
  console.log(state.toJS().login);
  return {
    loading: state.toJS().loading,
    login:state.toJS().login,
  }
};

const mapDispatchToProps = dispatch=> {
  return {
    TokenActions: bindActionCreators(TokenActions, dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';
    return (
      <Container direction="column">
        <Container transition={transition}>
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <TabBar amStyle="primary">
          <TabBar.Item component={Link} icon="list" title="试题中心" selected={router.isActive('/', true)} to="/" onlyActiveOnIndex/>
          <TabBar.Item
            component={Link}
            icon="list"
            title="我的练习"
            selected={router.isActive('/My', true)}
            to="/My"
            onlyActiveOnIndex
          />
        </TabBar>
        <Loading options={this.props.loading}/>
      </Container>
    )
  }
}