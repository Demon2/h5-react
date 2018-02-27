import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as LoginActions from '../../actions/login'
import * as TokenActions from '../../actions/token'

import {
  Container,
  Group,
  Slider,
  Field,
  List,
  Icon,
} from 'amazeui-touch';

const mapStateToProps = state => {
  return {
    login: state.toJS().login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    LoginActions: bindActionCreators(LoginActions, dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Login extends React.Component {
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.LoginActions.goLogin(this.refs.Username.getValue(),this.refs.Password.getValue());
  }
  render() {
    return (
      <Container>
        <Group>
          <List>
            <List.Item media={<Icon name="person"/>} nested="input">
              <Field label={null} ref="Username"  type="text" placeholder="请输入用户名"/>
            </List.Item>
            <List.Item media={<Icon name="info"/>} nested="input">
              <Field label={null} ref="Password"  type="password" placeholder="请输入密码"/>
            </List.Item>
            <Field 
              value="提交"
              type="submit"
              amStyle="secondary"
              block
              onClick={ev=>this.handleSubmit(ev)}
            />
          </List>
        </Group>
      </Container>
    );
  }
}

// {fields.map((field, i) => {
//               return (
//                 <List.Item key={i}  media={<Icon name={field.icon} />} nested="input">
//                   <Field {...field} label={null} ref="Username" placeholder={field.label + '...'}/>
//                 </List.Item>
//               );
//             })}




// /**
//  * Created by lxp on 2016/5/6.
//  */
// import React , { Component } from 'react';
// import {withRouter} from 'react-router'

// class Login extends Component {
//     static contextTypes = {
//         router: React.PropTypes.object
//     };

//     clickHandler() {
//         this.context.router.replace('home');
//     }

//     componentDidMount() {
//         this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
//     }

//     routerWillLeave(nextLocation) {
//         return true;
//         return 'Your work is not saved! Are you sure you want to leave?'
//     }

//     render() {
//         return (
//             <div id="noMatch" className="view">
//                 <div className="content has-header">
//                     我是登陆页面
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(Login)
