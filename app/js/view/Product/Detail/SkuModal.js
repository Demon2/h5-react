import React , { Component,PropTypes } from 'react';
import Modal from 'react-modal'
import Counter from 'components/Counter'

export default class SkuModal extends Component {
    /*
     * status
     * 0：查看sku
     * 1：加入购物车
     * 2：立即购买
     * */
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired
    };


    static propTypes = {
        detail: PropTypes.object.isRequired,
        sku: PropTypes.array.isRequired,
        status: PropTypes.number.isRequired
    };
    static defaultProps = {
        show: false
    };

    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            userAmount: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    }

    openModal() {
        this.setState({
            show: true
        })
    }

    closeModal() {
        this.setState({
            show: false
        })
    }

    onAmountChange(value) {
        this.setState({
            userAmount: value
        })
    }

    render() {
        const {detail,sku}=this.props;
        return (
            <Modal className="ProductDetailModal" closeTimeoutMS={300} isOpen={this.state.show}
                   onRequestClose={ev=>this.closeModal()}>
                <header>
                    <div className="preview">
                        <img src={`${detail.packageAvatar.split(',')[0]}?imageView2/1/w/150/h/150`}/>
                    </div>
                    <div className="price">¥{detail.packagePrice}</div>
                    <div className="amount">库存剩余量：{detail.packageAmount}份</div>
                    <button onClick={ev=>this.closeModal()}
                            className="button button-clear button-icon icon ion-ios-close-outline"/>
                </header>
                <div className="params">
                    <div className="item packagePropertyValue">
                        <div>规格</div>
                        <div>
                            {
                                sku && sku.map((item, index) => {
                                    return <button key={index} className="button button-small button-assertive">
                                        {item.skuProductName}
                                    </button>
                                })
                            }
                        </div>
                    </div>
                    {
                        (this.props.status == 1 || this.props.status == 2) && <div className="item">
                            <div>数量</div>
                            <div>
                                <Counter value={this.state.userAmount}
                                         onChange={value=>this.onAmountChange(value)}/>
                            </div>
                        </div>
                    }
                </div>
                {
                    this.props.status == 2 && <button className="button button-block button-positive submit">
                        立即购买
                    </button>
                }
                {
                    this.props.status == 1 && <button className="button button-block button-positive submit">
                        加入购物车
                    </button>
                }
            </Modal>
        )
    }
}