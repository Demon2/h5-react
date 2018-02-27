import Immutable,{fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import {
    GET_INFO_SUCCESS
} from '../actions/vender'

const initState = fromJS({});

export default createReducer(initState, {
    [GET_INFO_SUCCESS]: (state, action) => {
        return state.merge({...action.data.result});
    }
})