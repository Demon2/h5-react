import React , { Component,PropTypes } from 'react';
import Modal from 'react-modal'

export default class PayTypeModal extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        payType: PropTypes.number.isRequired
    };

    onChange(value) {
        this.props.onChange(value)
    }

    render() {
        return (
            <Modal className="DeliveryModal" closeTimeoutMS={300} isOpen={this.props.show}
                   onRequestClose={ev=>this.props.closeModal()} shouldCloseOnOverlayClick={false}>
                <div className="list">
                    <header className="item">
                        <span className="floatRight" onClick={ev=>this.props.closeModal()}>完成</span>
                    </header>

                    <label className="item item-radio">
                        <input type="radio" name="payType"
                               checked={this.props.payType==0} onChange={ev=>this.onChange(0)}/>
                        <div className="radio-content">
                            <div className="item-content">
                                <i className="icon-weixin"/>
                                <span>微信支付</span>
                            </div>
                            <i className="radio-icon icon ion-checkmark"/>
                        </div>
                    </label>
                    <label className="item item-radio">
                        <input type="radio" name="payType"
                               checked={this.props.payType==1} onChange={ev=>this.onChange(1)}/>
                        <div className="radio-content">
                            <div className="item-content">
                                <span>
                                    <i className="icon-huodao"/>
                                    协议支付
                                </span>
                            </div>
                            <i className="radio-icon icon ion-checkmark"/>
                        </div>
                    </label>
                    <label className="item item-radio">
                        <input type="radio" name="payType"
                               checked={this.props.payType==2} onChange={ev=>this.onChange(2)}/>
                        <div className="radio-content">
                            <div className="item-content">
                                <span>
                                    <i className="icon-card"/>
                                    授信会员卡支付
                                </span>
                            </div>
                            <i className="radio-icon icon ion-checkmark"/>
                        </div>
                    </label>

                </div>
            </Modal>
        )
    }
}