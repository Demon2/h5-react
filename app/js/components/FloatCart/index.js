import React , { Component } from 'react';
import './style.less'

import {Link} from 'react-router'

export default class FloatCart extends Component {
    static propTypes = {
        visible: React.PropTypes.bool.isRequired,
        totalAmount: React.PropTypes.number.isRequired,
        onClick: React.PropTypes.func.isRequired
    };

    render() {
        return (
            this.props.visible && <a className="floatCart icon-cart" onClick={ev=>this.props.onClick()}>
                <span className="badge badge-assertive">{this.props.totalAmount}</span>
            </a>
        )
    }
}
