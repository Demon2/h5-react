import React , { Component,PropTypes } from 'react';
import Counter from 'components/Counter'

class CartItem extends Component {

    static propsTypes = {
        changeAmount: PropTypes.func.isRequired,
        changeHandler: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };


    render() {
        const {item,changeAmount,changeHandler,index}=this.props;
        return (
            <div className="item item-checkbox">
                <label className="checkbox">
                    <input type="checkbox" checked={item.checked} value={item.cartId}
                           onChange={ev=>changeHandler(ev,index)}/>
                </label>
                <img src={`${item.packageAvatar.split(',')[0]}?imageView2/1/w/80/h/80`}/>
                <div className="info">
                    <div className="title">{item.packageName}</div>
                    <div className="params">规格：{
                        item.packagePropertyValue[0].indexOf('zq:') > -1 ? item.packagePropertyValue[1] : item.packagePropertyValue[0]
                    }</div>
                    <div className="price redFont">单价：¥{item.packagePrice}</div>
                    <Counter value={item.amount} onChange={value=>changeAmount(value,item,index)}/>
                </div>
            </div>
        )
    }
}

export default CartItem;