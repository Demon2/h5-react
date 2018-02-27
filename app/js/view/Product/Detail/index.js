import 'style/product.detail.less'

import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ProductActions from 'actions/product'
import * as LoadingActions from 'actions/loading'

import Slider from 'react-slick'
import {isEmptyObject} from 'util'
import SkuModal from './SkuModal'
import Header from 'components/Header'

const mapStateToProps = state => {
    return {
        detail: state.toJS().product.detail.data,
        sku: state.toJS().product.detail.sku,
        loading: state.toJS().loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        LoadingActions: bindActionCreators(LoadingActions, dispatch),
        ProductActions: bindActionCreators(ProductActions, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: {
                speed: 500,
                autoplay: true,
                arrows: false,
                vertical: false
            },
            skuModalShow: false,
            modalStatus: 1
        }
    }

    componentWillMount() {
        this.props.ProductActions.getDetail(this.props.params.id);
    }

    showSkuModal(status = 0) {
        this.setState({
            skuModalShow: true,
            modalStatus: status
        })
    }

    render() {
        const {detail,sku}=this.props;
        if (isEmptyObject(detail))return <div></div>;
        return (
            <div id="product-detail" className="view">
                <Header>
                    <h1 className="title">产品详情</h1>
                </Header>
                <div className="content has-header has-footer">
                    <Slider {...this.state.slider}>
                        {
                            detail.packageAvatar && detail.packageAvatar.split(',').map((item, index)=> (
                                <div>
                                    <img src={`${item}?imageView2/1/w/640/h/640`}/>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="header">
                        <div><span className="activity">促销</span><span>{detail.packageName}</span></div>
                        <div className="price">¥{detail.packagePrice}</div>
                        <div className="amount">库存剩余量：{detail.packageAmount}份</div>
                    </div>
                    <div className="list">
                        <a className="item item-icon-right" href="javascript:;" onClick={ev=>this.showSkuModal(0)}>
                            <i className="icon ion-ios-arrow-right"/>
                            {detail.packagePropertyValue[0].indexOf('zq:') > -1 ? detail.packagePropertyValue[1] : detail.packagePropertyValue[0]}
                        </a>

                        <a className="item comment" href="javascript:;">
                            <div>
                                <label>产品评价：</label>
                                <span className="right">差评<span style={{color: '#57cb6e'}}>(0)</span></span>
                                <span className="right" style={{paddingRight: 9}}>中评<span
                                    style={{color: '#ff8400'}}>(0)</span></span>
                                <span className="right" style={{paddingRight: 9}}>好评<span
                                    style={{color:'#f83a3e'}}>(0)</span></span>
                            </div>
                        </a>

                        <div className="item description">
                            <div style={{paddingBottom:10}}>产品详情：</div>
                            <div dangerouslySetInnerHTML={{__html:detail.packageDescription}}></div>
                        </div>
                    </div>
                </div>
                <div className="bar bar-footer">
                    <a href="javascript:;" onClick={ev=>this.showSkuModal(1)}>加入购物车</a>
                    <a href="javascript:;" onClick={ev=>this.showSkuModal(2)}>立即购买</a>
                </div>
                <SkuModal detail={detail} sku={sku} status={this.state.modalStatus} show={this.state.skuModalShow}/>
            </div>
        )
    }
}

export default Detail;