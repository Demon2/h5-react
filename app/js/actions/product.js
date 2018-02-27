import ProductServer from '../server/ProductServer'
import config,{limit} from '../config';
import {push} from  '../store/history';
import * as LoadingActions from './loading';
import {Promise} from 'es6-promise';

import {isEmptyObject} from 'util'

const Path = 'product';

export const GET_PRODUCT_LIST = `${Path}/GET_PRODUCT_LIST`;
export const GET_PRODUCT_LIST_SUCCESS = `${Path}/GET_PRODUCT_LIST_SUCCESS`;

export const GET_PRODUCT_DETAIL = `${Path}/GET_PRODUCT_DETAIL`;
export const GET_PRODUCT_DETAIL_SUCCESS = `${Path}/GET_PRODUCT_DETAIL_SUCCESS`;

export const GET_PRODUCT_SKU = `${Path}/GET_PRODUCT_SKU`;
export const GET_PRODUCT_SKU_SUCCESS = `${Path}/GET_PRODUCT_SKU_SUCCESS`;

export const getRemoteListAction = (offset, concat)=> {
    return {
        type: GET_PRODUCT_LIST,
        promise: ProductServer.getList(offset, limit),
        concat
    }
};

export const getSkuAction = (id, propertyValue)=> {
    return {
        type: GET_PRODUCT_SKU,
        promise: ProductServer.getSku(id, propertyValue)
    }
};

export const getDetailAction = (id)=> {
    return {
        type: GET_PRODUCT_DETAIL,
        promise: ProductServer.getById(id)
    }
};


const getDetailInitData = function (id, dispatch) {
    return new Promise((resolve, reject)=> {
        const action = getDetailAction(id);
        dispatch(action);
        action.promise.then(function (data) {
            let propertyValue = data.result.packagePropertyValue[0];
            if (propertyValue.indexOf('zq:') > -1) {
                propertyValue = data.result.packagePropertyValue[1];
            }
            const action = getSkuAction(id, propertyValue);
            dispatch(action);
            action.promise.then(function (data) {
                resolve(data);
            })
        });
    });
};

export function getDetail(id) {
    return (dispatch, getState)=> {
        const {data}=getState().toJS().product.detail;
        if (isEmptyObject(data)) {
            dispatch(LoadingActions.show('page'));
            getDetailInitData(id, dispatch).then(function () {
                dispatch(LoadingActions.hide());
            });
        }
    }
}

export function goDetailPage(id) {
    return dispatch=> {
        dispatch(LoadingActions.show());
        getDetailInitData(id, dispatch).then(function () {
            dispatch(LoadingActions.hide());
            push(`/product/detail/${id}`);
        });
    }
}


const getListInitData = function (dispatch) {
    return new Promise((resolve, reject)=> {
        var action = getRemoteListAction(0);
        dispatch(action);
        action.promise.then(function (data) {
            resolve(data);
        });
    });
};


export function getList(offset = 0) {
    return (dispatch, getState)=> {
        const {list}=getState().toJS().product;
        if (list.length == 0 || offset == list.length) {
            dispatch(getRemoteListAction(offset, true));
        }
    }
}

export function goListPage() {
    return dispatch=> {
        dispatch(LoadingActions.show());
        getListInitData(dispatch).then(function () {
            dispatch(LoadingActions.hide());
            push(`/product/list`);
        });
    }
}





