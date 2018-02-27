import React from 'react';
import {
  Container,
  Group,
  Button,
  ButtonGroup,
  Modal,
  Field,
  List,
  Icon,
} from 'amazeui-touch';

// const ModalExample = React.createClass({
  
// });


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  onOpen() {
    console.log('modal open....');
  }

  onClosed() {
    console.log('modal closed....');
  }

  handleAction(data) {
    let role = this.getModalRole();

    // 确定和取消放在一起处理
    // data 为 true 时为 `确定`
    if (role === 'confirm') {
      console.log('你的选择是：「' + (data ? '确定' : '取消') + '」')
    } else if (role === 'prompt') {
      // `prompt` 类型支持通过返回值控制是否关闭 Modal

      // 点击取消时 data 的值为 null

      // 简单的验证逻辑
      // 仅适用于一个输入框的场景，多个输入框的 data 值为 `['', '', ...]`
      if (data === '') {
        console.error('赶紧交出来啊，不然...你懂的...');
        return false; // 点击确定时不关闭 Modal
      }

      console.log('输入的数据是：', data);
      return true; // 点击确定时关闭 Modal
    }
  }

  getModalRole() {
    return this.props.modalProps.role;
  }

  render() {
    return (
      <div>
        <Button
          amStyle='primary'
          onClick={ev=>this.openModal(ev)}
        >
          {this.props.title}
        </Button>
        <Modal
          ref="modal"
          isOpen={this.state.isModalOpen}
          onDismiss={ev=>this.closeModal(ev)}
          onOpen={ev=>this.onOpen(ev)}
          onClosed={ev=>this.onClosed(ev)}
          onAction={ev=>this.handleAction(ev)}
          {...this.props.modalProps}
        >
          {this.getModalRole() !== 'loading' && this.props.children}
        </Modal>
      </div>
    );
  }
}