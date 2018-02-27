import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import LocalStorageServer from '../server/LocalStorageServer'

import {
    CATEGORY_SUCCESS,
    GATEGROY_FAILURE,
    SAVE_CTEGORY_SUCCESS,
    SAVE_CTEGORY_FAILURE,
} from '../actions/category'

var category = LocalStorageServer.getChoiceCategory();

const initState = fromJS({
	list:[],
    detaile:{
        id:category ? category.categoryid : '' ,
        name: category ? category.categoryname : '请选择题库',
    },
	state:false
});

console.log(initState);

export default createReducer(initState, {
    [CATEGORY_SUCCESS]: (state, action) => {
        console.log("CATEGORY_SUCCESS");
        return state.merge({
            list: action.data.result.data,
            state: true
        });
    },
    [SAVE_CTEGORY_SUCCESS]:(state,action) => {
        console.log("SAVE_CTEGORY_SUCCESS");
        return state.merge({
            detaile: action.data,
        });
    }
})