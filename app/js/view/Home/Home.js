import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'

import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Icon,
  Modal,
  Button,
  Loader,
  Card,
} from 'amazeui-touch';
import Prompt from 'components/Popup/PopupUpDown'

import LocalStorageServer from '../../server/LocalStorageServer'
import * as CategoryActions from '../../actions/category'



const mapStateToProps = state => {
  return {
    login: state.toJS().login,
    category: state.toJS().category,
    token:state.toJS().token,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    CategoryActions:bindActionCreators(CategoryActions,dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isModalOpen: false,
      showPrompt:true,
      token: this.props.login.result.token,
    } 
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  closeModal() {
    this.setState({
      isModalOpen:false,
    })
  }

  getCategory() {
    if(this.state.token) {
      this.setState({isModalOpen: !this.state.isModalOpen});
      this.props.CategoryActions.getCategory();
    }else {
      this.context.router.push('login');
    }
  }

  saveCategory(id,name) {
    this.props.CategoryActions.saveCategory(this.props.login.result.userId,id,name);
    this.setState({
      isModalOpen:false,
    });
  }

  goSpecify() {
    if(this.state.token) {
      this.context.router.push('TestPapers');
    }else {
      this.context.router.push('login');
    }
  }

  render() {
    const { 
      login,
      category,
      ...props} = this.props;
    return (
      <View>
        <NavBar amStyle="primary">
          <a className={`${"navbar-title navbar-center"} ${this.state.isModalOpen ? 'active': ''}`} onClick={ev=>this.getCategory(ev)}>
            {category.detaile.name}
            <i className="exam-icon exam-xiangxia arror"></i>
            {this.state.isModalOpen && <Prompt className="category">
              {!category.state &&  <Loader/>}
                {category.list.map((item,$Index)=>
                <List className="category-list">
                  <List.Item role="header" key={$Index}>{item.name}</List.Item>
                  <li className="category-item">
                  {item.subs.map((subitem,$index)=>
                    <div className="box-link"><a className={`${"btn btn-transparent btn-radius"} ${(category.detaile.id == subitem.id) ? 'active' : ''}`}  id ={subitem.id} onClick={ev=>this.saveCategory(subitem.id,subitem.name)}>{subitem.name}</a></div>
                  )}</li>
                </List>
                )
              }
            </Prompt>}
          </a>
        </NavBar>
        <Container scrollable>
          <Group className="index-group">
            <Card onClick={ev=>this.goSpecify()} className="bg-warning">
              <p className="title">专项练习</p>
              针对性选题，挑战薄弱点，突破自我。
            </Card>
            <Card className="bg-success">
              <p className="title">水平测试</p>
              真题模卷，实战模拟，高分触手可得。
            </Card>
            <Card className="bg-danger">
              <p className="title">试卷模考</p>
              智能组卷，实时反馈，测出真水平。
            </Card>
           
          </Group>
        </Container>
      </View>
    );
  }
}