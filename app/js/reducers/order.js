import Immutable,{fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import {
    ADD_ORDER_SUCCESS
} from '../actions/order'

const initState = fromJS({
    logisticsType: 0,
    payType: 0
});

export default createReducer(initState, {
    [ADD_ORDER_SUCCESS]: (state, action) => {
        return state
    }
})