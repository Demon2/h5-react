import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import LocalStorageServer from '../server/LocalStorageServer'

import {
    KNOWLEDGEPOINT_SUCCESS,
    KNOWLEDGEPOINT_FAILURE
} from '../actions/knowledgepoint'

const initState = fromJS({
	list:[],
});

export default createReducer(initState, {
    [KNOWLEDGEPOINT_SUCCESS]: (state, action) => {
        console.log("KNOWLEDGEPOINT_SUCCESS");
        return state.merge({
            list: action.data.result.data,
        });
    },
})