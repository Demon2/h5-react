import LoginServer from '../server/LoginServer'
import * as LoadingActions from './loading';
import LocalStorageServer from '../server/LocalStorageServer'
import {push} from  '../store/history';

const Path = 'login';

export const LOGIN = `${Path}/LOGIN`;
export const LOGIN_REQUEST = `${Path}/LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${Path}/LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `${Path}/LOGIN_FAILURE`;

export const LOGIN_STATE = `${Path}/LOGIN_STATE`;

//登陆跳转到对应的页面，设置token,
export const goLoginAction = (name,password)=> {
    return {
        type: LOGIN,
        promise: LoginServer.login(name, password),
    }
};


export const loginStateAction = (data) => {
    return {
        type:LOGIN_STATE,
        data
    }
} 


export function goLogin(name,password) {
    return (dispatch)=> {
        // const cart = getState().toJS().cart;
        // LocalStorageServer.set('cart', cart);
        dispatch(LoadingActions.show());
        initIndexData(dispatch, name,password).then(function (data) {
            dispatch(LoadingActions.hide());
            console.log(data);
            if(data.success==1) {
                var userinfo = {token:data.result.token};
                if(LocalStorageServer.getLoginId() == data.result.userId) {
                    var userinfo = LocalStorageServer.getLoginInfo(data.result.userId);
                    userinfo.token= data.result.token;
                }
                LocalStorageServer.setLoginId(data.result.userId);
                LocalStorageServer.setLogInInfo(data.result.userId,userinfo);
                push(`/`);
            }else {
                dispatch(LoadingActions.show('登陆失败'));
            }
            // if(data.islogin) {
            //     LocalStorageServer.set('token',data.token);
            //     console.log(LocalStorageServer.get('token'));
            //     console.log('登陆成功');
            //     push(`/`);
            // }else {
            //     console.log('登陆失败');
            // }
        })
    }
}

var initIndexData = function (dispatch, name,password) {
    return new Promise((resolve, reject)=> {
        const action = goLoginAction(name,password);
        dispatch(action);
        action.promise.then(function (data) {
            resolve(data)
        })
    })
};

