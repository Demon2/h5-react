import AddressServer from '../server/AddressServer'
import config from '../config';
import {push} from  '../store/history';
import * as LoadingActions from 'actions/loading'
import {Promise} from 'es6-promise';

const Path = 'address';

export const ADD_ADDRESS = `${Path}/ADD_ADDRESS`;
export const ADD_ADDRESS_SUCCESS = `${Path}/ADD_ADDRESS_SUCCESS`;

export const UPDATE_ADDRESS = `${Path}/UPDATE_ADDRESS`;
export const UPDATE_ADDRESS_SUCCESS = `${Path}/UPDATE_ADDRESS_SUCCESS`;

export const GET_LIST = `${Path}/GET_LIST`;
export const GET_LIST_SUCCESS = `${Path}/GET_LIST_SUCCESS`;


export function getList() {
    return {
        type: GET_LIST,
        promise: AddressServer.getList()
    }
}