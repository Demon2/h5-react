import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router'

import {
  Container,
  Group,
  Modal,
  Accordion,
} from 'amazeui-touch';
import {GroupItem} from '../../components/FoldingMenu'
import Prompt from 'components/Popup/PopupUpDown'

import * as LibraryActions from '../../actions/library'
import * as KnowledgepointActions from '../../actions/knowledgepoint'

const mapStateToProps = state => {
  return {
    login: state.toJS().login,
    library :state.toJS().library,
    knowledgepoint: state.toJS().knowledgepoint,
    list: state.toJS().library.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    LibraryActions:bindActionCreators(LibraryActions, dispatch),
    KnowledgepointActions:bindActionCreators(KnowledgepointActions,dispatch)
  }
};

@connect(mapStateToProps, mapDispatchToProps)

export default class TestPapers extends React.Component {
  constructor(props){
    super(props);
    this.props.LibraryActions.getLibrary();
    this.props.KnowledgepointActions.getKnowledgepoint();
    this.state = {
      isModalOpen:false,
    }
  }

  changeLibrary() {
    this.setState({
      isModalOpen:!this.state.isModalOpen,
    })
  }

  saveLibrary(id,name) {
    this.props.LibraryActions.saveLibrary(this.props.login.result.userId,id,name);
    this.setState({
      isModalOpen:false,
    })
    // 获取知识点？
  }

  render() {
      const {list,library,knowledgepoint}=this.props;
      console.log(knowledgepoint.list);
      var array = [{id:1,subs:[{id:2,subs:[{id:11,subs:[]},{id:12}]},{id:3}]},{id:4,subs:[{id:6}]},{id:5,subs:[{id:7}]}];
      console.log(array);
      return (
          <Container className="bg-white">
            <Group>
              <div className={`${"library-header"} ${this.state.isModalOpen ? 'active': ''}`} onClick={ev=>this.changeLibrary()}>
                {library.detaile.name}<i className="exam-icon exam-xiangxia arror"></i>
                {this.state.isModalOpen && <Prompt className="library">
                  <ul className="list library-list">
                    {
                      list.map((item, $index)=>
                        <li className="item" key={$index} onClick={ev=>this.saveLibrary(item.id,item.name)}>
                          <a className={`${item.id ==library.detaile.id ? 'color-warning' : false}`}>{item.name}</a>
                        </li>
                      )
                    }
                  </ul>
                  </Prompt>}
              </div>
            </Group>
            <Group>
               <GroupItem items={ knowledgepoint.list }></GroupItem>
               <Accordion>
                <Accordion.Item title="sdfdsf">sdfsdfsdfsdfsdfsd</Accordion.Item>
                <Accordion.Item title="sdfdsf">sdfsdfsdfsdfsdfsd</Accordion.Item>
                <Accordion.Item title="sdfdsf">sdfsdfsdfsdfsdfsd</Accordion.Item>
               </Accordion>
            </Group>
          </Container>
      )
    }
}




