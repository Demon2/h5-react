import Immutable,{fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import {LOADING_SHOW,LOADING_HIDE} from '../actions/loading'

const initState = fromJS({
    show: false,
    messge:'正在加载'
});

export default createReducer(initState, {
    [LOADING_SHOW]: (state, action) => {
        return state.merge({
            show: true,
            messge: action.messge
        });
    },
    [LOADING_HIDE]: (state, action) => {
        return state.merge({
            show: false
        });
    }
})