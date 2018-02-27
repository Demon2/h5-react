import React , { Component,PropTypes,cloneElement } from 'react';
import {findDOMNode} from 'react-dom'
import './style.less'
import Modal from 'react-modal'
import cn from 'classnames';

let requires = [];
let inputs = [];
export default class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        }
    }

    static defaultProps = {
        onOk: ev=> {
        },
        onCancel: ev=> {
        },
        title: 'Prompt测试',
        okName: '确定',
        cancelName: '取消'
    };

    onChange(event) {
        for (let i = 0; i < requires.length; i++) {
            if (!requires[i].value) {
                this.setState({
                    canSubmit: false
                });
                return;
            }
        }
        this.setState({
            canSubmit: true
        })
    }

    onOk() {
        let data = {};
        inputs.forEach(function (input) {
            data[input.name] = input.value;
        });
        this.props.onOk(data);
    }

    componentDidMount() {
        const {children}=this.refs.promptContent;
        for (let i = 0; i < children.length; i++) {
            inputs.push(children[i]);
            if (children[i].required) {
                requires.push(children[i]);
            }
        }
    }

    render() {
        return (
            <Modal className="Prompt" closeTimeoutMS={300} isOpen={true}
                   onRequestClose={ev=>{this.onClose()}} shouldCloseOnOverlayClick={false}>
                <div className="header">{this.props.title}</div>
                <div ref="promptContent" className="content">
                    {
                        this.props.children.map((input, index)=> {
                            return cloneElement(input, {
                                onChange: ev=>this.onChange(ev),
                                key: index
                            })
                        })
                    }
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col">
                            <button
                                className={cn('button button-block button-positive ok',{disabled:!this.state.canSubmit})}
                                onClick={ev=>this.onOk(ev)}>{this.props.okName}
                            </button>
                        </div>
                        <div className="col">
                            <button className="button button-block button-assertive cancel"
                                    onClick={ev=>this.props.onCancel(ev)}>{this.props.cancelName}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}