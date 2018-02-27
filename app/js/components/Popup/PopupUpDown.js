import React , { Component } from 'react';
import './style.less'
import Modal from 'react-modal'

export default class Alert extends Component {
  static defaultProps = {
    onClose: ev=> {
    },
  };

  render() {
    return (
      <Modal className={"popup-updown "+this.props.className} closeTimeoutMS={300} isOpen={true} onRequestClose={ev=>{this.props.onClose()}} shouldCloseOnOverlayClick={false}>
        <div className="content">{this.props.children}</div>
      </Modal>
    )
  }
}