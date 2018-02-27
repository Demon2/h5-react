import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import {isEmptyObject,objectLength} from 'js/util'

import {
    GET_LIST_SUCCESS,
    ADD_ADDRESS_SUCCESS,
    UPDATE_ADDRESS_SUCCESS
} from '../actions/address'

const initState = fromJS({
    list: []
});

export default createReducer(initState, {
    [GET_LIST_SUCCESS]: (state, action) => {
        return state.merge({
            list: action.data.result
        });
    }
})
