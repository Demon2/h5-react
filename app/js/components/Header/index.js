import React , { Component } from 'react';
import { Button } from 'amazeui-touch';

import './style.less'
import history from 'store/history'

export default class Header extends Component {
    static defaultProps = {
        backButton: true
    };

    goBack() {
        history.goBack();
    }

    render() {
        return (
            <div className="header">
                {
                    this.props.backButton&&
                    <button className="button button-icon icon ion-chevron-left" onClick={ev=>this.goBack(ev)}></button>
                }
                <Button>Hello World</Button>
                {this.props.children}
            </div>
        )
    }
}