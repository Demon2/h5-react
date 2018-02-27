import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import LocalStorageServer from '../server/LocalStorageServer'

import {
    LIBRARY_SUCCESS,
    LIBRARY_FAILURE,
    SAVE_LIBRARY_SUCCESS,
    SAVE_LIBRARY_FAILURE,
} from '../actions/library'

var library = LocalStorageServer.getChoiceLibrary();


const initState = fromJS({
	list:[],
    detaile:{
        id:library ? library.libraryid : '' ,
        name: library ? library.libraryname : '请选择题库',
    },
});

console.log(initState);

export default createReducer(initState, {
    [LIBRARY_SUCCESS]: (state, action) => {
        console.log("LIBRARY_SUCCESS");
        return state.merge({
            list: action.data.result.data,
        });
    },
    [SAVE_LIBRARY_SUCCESS]:(state,action) => {
        console.log("SAVE_LIBRARY_SUCCESS");
        return state.merge({
            detaile: action.data,
        });
    }
})