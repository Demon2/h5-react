import Config,{venderId} from '../config';
import {send} from './BasiceServer'

export const getInfo = ()=> {
    var api = `/public/vender/detail/${venderId}`;
    return send(api, null, 'GET');
};
export default {
    getInfo
}