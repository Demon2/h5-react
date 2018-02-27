import React , { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router'
import '../../../style/product.list.less'

import * as ProductActions from '../../actions/product'

import InfiniteScroll from '../../components/infiniteScroll'
import Header from 'components/Header'

const mapStateToProps = state => {
    return {
        list: state.toJS().product.list,
        pagination: state.toJS().product.pagination
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ProductActions: bindActionCreators(ProductActions, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    componentWillMount() {
        this.props.ProductActions.getList();
    }

    loadMore() {
        this.props.ProductActions.getList(this.props.list.length);
    }

    goDetailPage(productId) {
        this.props.ProductActions.goDetailPage(productId);
    }

    render() {
        const {list,pagination}=this.props;
        return (
            <div id="product-list" className="view">
                <Header>
                    <h1 className="title">产品列表</h1>
                </Header>

                <div className="content has-header">
                    <ul className="list">
                        {
                            list.map((item, $index)=>
                                <li className="item" key={$index}>
                                    <a onClick={ev=>this.goDetailPage(item.packageId)}>
                                        <img src={`${item.packageAvatar.split(',')[0]}?imageView2/1/w/100/h/100`}/>
                                        <span className="packageName">{item.packageName}</span>
                                        <span className="packagePrice">¥{item.packagePrice}</span>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                    <InfiniteScroll status={pagination.status} onLoad={ev=>this.loadMore()}/>
                </div>
            </div>
        )
    }
}

export default List;