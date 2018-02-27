import React , { Component } from 'react';
import './style.less'

export default class Counter extends Component {
    static defaultProps = {
        value: 1,
        max: 1000000,
        onChange: ev=> {
        }
    };

    render() {
        const {value,onChange,max}=this.props;
        return (
            <div className="counter">
                <div className="counter-button counter-decrument" onClick={ev=>onChange((value-1)||1)}></div>
                <span>{value}</span>
                <div className="counter-button counter-incrument"
                     onClick={ev=>onChange(value+1>max?max:value+1)}></div>
            </div>
        )
    }
}