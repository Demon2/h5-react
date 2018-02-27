import VenderServer from '../server/VenderServer'
import config from '../config';
import {push} from  '../store/history';
import * as LoadingActions from 'actions/loading'
import {Promise} from 'es6-promise';

const Path = 'vender';

export const GET_INFO = `${Path}/GET_INFO`;
export const GET_INFO_SUCCESS = `${Path}/GET_INFO_SUCCESS`;

export function getInfo(visible) {
    return {
        type: GET_INFO,
        promise: VenderServer.getInfo()
    }
}