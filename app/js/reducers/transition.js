import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import {isEmptyObject,objectLength} from 'js/util'

import {
    CHANGE_ENABLE,
    CHANGE_DIRECTION,
    SET_TIMEOUT
} from '../actions/transition'

const initState = fromJS({
    enable: true,
    direction: "forward",
    timeout: 2000
});

export default createReducer(initState, {
    [CHANGE_ENABLE]: (state, action) => {
        return state.merge({
            enable: action.enable
        });
    },
    [CHANGE_DIRECTION]: (state, action) => {
        return state.merge({
            direction: action.direction
        });
    },
    [SET_TIMEOUT]: (state, action) => {
        return state.merge({
            timeout: action.timeout
        });
    }
})
