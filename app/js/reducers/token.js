import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import {GET_TOKEN_SUCCESS,GET_TOKEN_FAILURE} from '../actions/token'

const initState = fromJS({
	token:1111,
	state:false
});


export default createReducer(initState, {
    [GET_TOKEN_SUCCESS]: (state, action) => {
    	console.log("GET_TOKEN_SUCCESS");
        // return state.merge({...action.data});
        return state.merge({
            token: action.data.token,
            state: true
        });
    }
})
