import Immutable,{fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';

import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_SKU_SUCCESS
} from '../actions/product'

const initState = fromJS({
    list: [],
    detail: {
        data: {},
        sku: []
    },
    pagination: {
        status: 1
    }
});

export default createReducer(initState, {
    [GET_PRODUCT_LIST_SUCCESS]: (state, action) => {
        let list = action.data.result;
        if (action.concat) {
            list = state.toJS().list.concat(action.data.result);
        }
        return state.merge({
            list: list,
            pagination: {
                totalCount: action.data.totalCount,
                totalPage: action.data.totalPage,
                status: list.length >= action.data.totalCount ? 4 : 1
            }
        });
    },
    [GET_PRODUCT_DETAIL_SUCCESS]: (state, action) => {
        return state.mergeDeep({
            detail: {
                data: action.data.result
            }
        });
    },
    [GET_PRODUCT_SKU_SUCCESS]: (state, action) => {
        return state.mergeDeep({
            detail: {
                sku: action.data.result
            }
        });
    }
})