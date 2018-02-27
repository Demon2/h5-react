import React , { Component } from 'react';
import './style.less'
import Modal from 'react-modal'

export default class Confirm extends Component {
    static defaultProps = {
        onOk: ev=> {
        },
        onCancel: ev=> {
        },
        title: 'Confirm标题',
        okName: '确定',
        cancelName: '取消'
    };

    render() {
        return (
            <Modal className="Alert" closeTimeoutMS={300} isOpen={true}
                   onRequestClose={ev=>{this.props.onClose()}} shouldCloseOnOverlayClick={false}>
                <div className="header">{this.props.title}</div>
                <div className="content">{this.props.children || 'Confirm内容'}</div>
                <div className="footer">
                    <div className="row">
                        <div className="col">
                            <button className="button button-block button-positive ok"
                                    onClick={ev=>this.props.onOk(ev)}>{this.props.okName}
                            </button>
                        </div>
                        <div className="col">
                            <button className="button button-block button-assertive cancel"
                                    onClick={ev=>this.props.onCancel(ev)}>{this.props.cancelName}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}