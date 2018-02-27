import React , { Component,PropTypes } from 'react';
import Modal from 'react-modal'

export default class DeliveryModal extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        logisticsType: PropTypes.number.isRequired
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
                        <input type="radio" name="logisticsType" value="0"
                               checked={this.props.logisticsType==0} onChange={ev=>this.onChange(0)}/>
                        <div className="radio-content">
                            <div className="item-content">
                                <span>指定地点自提</span>
                            </div>
                            <i className="radio-icon icon ion-checkmark"/>
                        </div>
                    </label>
                    <label className="item item-radio">
                        <input type="radio" name="logisticsType" value="1"
                               checked={this.props.logisticsType==1} onChange={ev=>this.onChange(1)}/>
                        <div className="radio-content">
                            <div className="item-content">
                                <span>送货上门</span>
                            </div>
                            <i className="radio-icon icon ion-checkmark"/>
                        </div>
                    </label>

                </div>
            </Modal>
        )
    }
}