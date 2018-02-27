import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {objectLength} from  'util'
import {Link} from 'react-router';
import cn from 'classnames';

import * as CartActions from '../../actions/cart'
import * as OrderActions from '../../actions/order'

import 'style/cart.less'
import CartItem from './CartItem'
import Header from 'components/Header'

const mapStateToProps = state => {
    return {
        list: state.toJS().cart.list,
        checkedAll: state.toJS().cart.checkedAll,
        totalMoney: state.toJS().cart.totalMoney,
        userSelectList: state.toJS().cart.userSelectList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        CartActions: bindActionCreators(CartActions, dispatch),
        OrderActions: bindActionCreators(OrderActions, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class Cart extends Component {

    componentWillMount() {
        if (this.props.list && this.props.list.length == 0) {
            this.props.CartActions.getList();
        }
    }

    changeHandler(ev, index) {
        this.props.CartActions.toggleSelect(index);
    }

    toggleSelectAll() {
        this.props.CartActions.toggleSelectAll();
    }

    changeAmount(value, item, index) {
        this.props.CartActions.changeAmount(index, item.packageId, value);
    }

    goOrderIndexPage() {

        this.props.OrderActions.goIndexPage();
    }

    render() {
        const {list,userSelectList}=this.props;
        return (
            <div id="cart" className="view">
                <Header>
                    <h1 className="title">购物车</h1>
                </Header>
                <div className="content has-header has-footer">
                    <div className="list">
                        {
                            list.map((item, index)=>(
                                <CartItem key={index}
                                          index={index}
                                          item={item}
                                          changeAmount={(value,item,index)=>this.changeAmount(value,item,index)}
                                          changeHandler={(ev,index)=>this.changeHandler(ev,index)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="bar bar-footer">
                    <div className="item-checkbox">
                        <label className="checkbox">
                            <input type="checkbox" checked={this.props.checkedAll} value="checkedAll"
                                   onChange={ev=>this.toggleSelectAll(ev)}/>
                        </label>
                        全选
                        <span className="totalPrice">合计：<span className="redFont">¥{this.props.totalMoney}</span></span>
                    </div>
                    <div className={cn({disabled:objectLength(userSelectList) == 0})}>
                        {
                            objectLength(userSelectList) == 0 ?
                                <span>去下单({objectLength(userSelectList)})</span> :
                                <a onClick={ev=>this.goOrderIndexPage()}>去下单({objectLength(userSelectList)})</a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;