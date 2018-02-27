import React , { Component,PropTypes } from 'react';

class Item extends Component {
    static propsTypes = {
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        const {item,index}=this.props;
        return (
            <div className="item" key={index}>
                <img src={`${item.packageAvatar.split(',')[0]}?imageView2/1/w/80/h/80`}/>
                <div className="info">
                    <div className="title">{item.packageName}</div>
                    <div className="params">规格：{
                        item.packagePropertyValue[0].indexOf('zq:') > -1 ? item.packagePropertyValue[1] : item.packagePropertyValue[0]
                    }</div>
                    <div className="price">
                        <span className="packagePrice">单价：<span className="redFont">¥{item.packagePrice}</span></span>
                        <span className="amount">数量：<span className="redFont">{item.amount}</span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;