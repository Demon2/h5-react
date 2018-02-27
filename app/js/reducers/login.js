import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import LocalStorageServer from '../server/LocalStorageServer'
import {LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_STATE} from '../actions/login'

let loginid = LocalStorageServer.getLoginId();
let token = null;
if(loginid) {
    token = LocalStorageServer.getToken(loginid);
}

const initState = fromJS({
    success:0,
    result: {
        token: token,
        userId: loginid ? loginid : null ,
    },
});


export default createReducer(initState, {
    [LOGIN_SUCCESS]: (state, action) => {
        console.log(action.data);
        return state.merge({...action.data});
    },
    [LOGIN_FAILURE]: (state,action) => {
    	return state.merge({...action.data});
    },
    [LOGIN_STATE]:(state,action) => {
        console.log("LOGIN_STATE");
        return state.merge({...action.data});
    }
})