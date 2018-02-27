import Config,{venderId} from '../config';
import {send} from './BasiceServer'

export const getList = ()=> {
    var api = `/user/cart/list/${venderId}`;
    return send(api, null, 'GET');
};
export const update = function (data) {
    var api = `/user/cart/update`;
    return send(api, data);
};

export default {
    getList,
    update
}