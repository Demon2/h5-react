import React , { Component } from 'react';
import './style.less'
// import './test.scss'

import Spinner from '../Spinner'

export default class Loading extends Component {
    static defaultProps = {
        options: {
            show: false,
            messge:'正在加载',
        }
    };

    render() {
        const {options}=this.props;
        
        return (
            options.show && <div className="GlobalLoading">
                
                    <div className="loading-toast">
                        <Spinner/>{options.messge}
                    </div>
                
            </div>
        )
    }
}