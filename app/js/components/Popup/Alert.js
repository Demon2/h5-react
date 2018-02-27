import React , { Component } from 'react';
import './style.less'
import Modal from 'react-modal'

export default class Alert extends Component {
    render() {
        return (
            <Modal className="Alert" closeTimeoutMS={300} isOpen={true}
                   onRequestClose={ev=>{this.props.onClose()}} shouldCloseOnOverlayClick={false}>
                <div className="header">{this.props.title}</div>
                <div className="content">{this.props.children || 'Confirm内容'}</div>
                <div className="footer">
                    <button className="button button-block button-positive"
                            onClick={ev=>this.props.onClose(ev)}>{this.props.btnName}
                    </button>
                </div>
            </Modal>
        )
    }
}