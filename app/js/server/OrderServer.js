import Config,{venderId} from '../config';
import {send} from './BasiceServer'
import {getCookie} from './CookieServer'

export const add = function (data) {
    var api = '/user/order/add';
    data.venderId = venderId;
    return send(api, data);
}

export const directadd = function (data) {
    var api = '/user/order/directadd';
    data.venderId = venderId;
    return send(api, data);
};

export default {
    add,
    directadd
}