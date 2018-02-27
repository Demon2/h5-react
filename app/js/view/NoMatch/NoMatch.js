import React , { Component } from 'react';
import {withRouter} from 'react-router'
import Header from '../../components/Header'

class NoMatch extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    clickHandler() {
        this.context.router.replace('home');
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }

    routerWillLeave(nextLocation) {
        return true;
        return 'Your work is not saved! Are you sure you want to leave?'
    }

    render() {
        return (
            <div id="noMatch" className="view">
                <Header backButton={true}>
                    <h1 className="title">404 NO FOUNT</h1>
                </Header>
                <div className="content has-header">
                </div>
            </div>
        )
    }
}

export default withRouter(NoMatch)
