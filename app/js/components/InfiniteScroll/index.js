import React , { Component } from 'react';
import './style.less'

import Spinner from '../Spinner'

export default class InfiniteScroll extends Component {

    static defaultProps = {
        status: 1,
        onLoad: ev=> {
        },
        onError: ev=> {
        },
        height: 0,
        className: ""
    };

    startListenScroll(onLoad, height) {
        const doc = document;
        var fn = ev=> {
            var r = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, doc.body.offsetHeight, doc.documentElement.offsetHeight, doc.body.clientHeight, doc.documentElement.clientHeight);
            window.innerHeight + window.scrollY >= r - height && 1 == this.props.status && onLoad();
        };
        window.addEventListener("scroll", fn, false);
        this.listener.push(fn);
    }

    componentDidMount() {
        this.listener = [];
        this.startListenScroll(this.props.onLoad, this.props.height)
    }

    componentWillUnmount() {
        this.listener.map(function (fn) {
            window.removeEventListener("scroll", fn, false)
        })
    }

    render() {
        const {status}=this.props;
        if (status == 1) {
            return <div className="infinitescroll loading"><Spinner/>加载中</div>
        } else if (status == 2) {
            return (
                <div className="infinitescroll loaderror">
                    加载失败, 点击<span className="infinitescroll refresh">刷新</span>
                </div>
            )
        } else if (status == 2) {
            return <div className="infinitescroll load-done">加载完成</div>
        } else if (status == 4) {
            return <div className="infinitescroll loaderror">没有更多了</div>
        } else {
            return <div></div>;
        }
    }
}