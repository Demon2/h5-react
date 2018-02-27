import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getObjectValueToArray} from 'util'

import * as CartActions from 'actions/cart'
import * as OrderActions from 'actions/order'

import 'style/order.index.less'

import Item from './Item'
import DeliveryModal from './DeliveryModal'
import PayTypeModal from './PayTypeModal'
import Header from 'components/Header'

const mapStateToProps = state => {
    return {
        totalMoney: state.toJS().cart.totalMoney,
        userSelectList: state.toJS().cart.userSelectList,
        logisticsType: state.toJS().order.logisticsType,
        payType: state.toJS().order.payType,
        address: state.toJS().address.list[0]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        CartActions: bindActionCreators(CartActions, dispatch),
        OrderActions: bindActionCreators(OrderActions, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class OrderIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logisticsTypeModalShow: false,
            logisticsType: props.logisticsType,
            payTypeModalShow: false,
            payType: props.payType
        }
    }

    componentWillMount() {
        this.props.OrderActions.getIndexData();
    }

    showLogisticsTypeModal(status = 0) {
        this.setState({
            logisticsTypeModalShow: true
        })
    }

    showPayTypeModal(status = 0) {
        this.setState({
            payTypeModalShow: true
        })
    }

    closeModal() {
        this.setState({
            payTypeModalShow: false,
            logisticsTypeModalShow: false
        })
    }

    setLogisticsType(value) {
        this.setState({
            logisticsType: value
        })
    }

    setPayType(value) {
        this.setState({
            payType: value
        })
    }

    render() {
        const {userSelectList,totalMoney,address}=this.props;
        const {logisticsType,logisticsTypeModalShow,payType,payTypeModalShow}=this.state;
        return (
            <div id="order-index" className="view">
                <Header>
                    <h1 className="title">确认订单</h1>
                </Header>
                <div className="content has-header has-footer">
                    <section className="address item item-icon-right">
                        <i className="icon ion-ios-arrow-right"/>
                        {
                            address && <span>
                            <div>
                                <span>收货人：{address.receiver}</span>
                                <span className="floatRight">{address.phone}</span>
                            </div>
                            <div>
                                收货地址：{address.provinceName} {address.cityName} {address.districtName} {address.addressName}
                            </div>
                        </span>
                        }
                        <div className="redFont">*注：请添加或修改收货地址及联系电话！</div>
                    </section>
                    <section className="packageList">
                        {
                            getObjectValueToArray(userSelectList).map((item, index)=> (
                                <Item item={item} index={index}/>
                            ))
                        }
                    </section>
                    <section className="orderConfig list">
                        <div className="item item-icon-right" onClick={ev=>this.showLogisticsTypeModal()}>
                            <i className="icon ion-ios-arrow-right"/>
                            配送方式
                            <span className="floatRight">
                                {
                                    this.state.logisticsType == 0 ? '指定地点自提' : '送货上门'
                                }
                            </span>
                        </div>
                        <div className="item">
                            <span>物流费用</span>
                            <span className="floatRight">按实际发生独立支付</span>
                        </div>
                        <div className="item item-icon-right" onClick={ev=>this.showPayTypeModal()}>
                            <i className="icon ion-ios-arrow-right"/>
                            支付方式
                            <span className="floatRight">
                                {
                                    this.state.payType == 0 ? (<span><i className="icon-weixin"/>微信支付</span>) :
                                        this.state.payType == 1 ? (<span><i className="icon-huodao"/>协议支付</span>) :
                                            this.state.payType == 2 ? (<span><i className="icon-card"/>授信会员卡支付</span>) :
                                                ''
                                }
                            </span>
                        </div>
                        <div className="item">
                            订单备注
                        </div>
                    </section>
                </div>
                <div className="bar bar-footer">
                    <span className="totalPrice">合计：<span className="redFont">¥{totalMoney}</span></span>
                    <div className="submitButton">
                        结算
                    </div>
                </div>
                <DeliveryModal show={logisticsTypeModalShow} logisticsType={logisticsType}
                               onChange={value=>this.setLogisticsType(value)} closeModal={ev=>this.closeModal()}/>
                <PayTypeModal show={payTypeModalShow} payType={payType}
                              onChange={value=>this.setPayType(value)} closeModal={ev=>this.closeModal()}/>
            </div>
        )
    }
}

export default OrderIndex;