import Config from '../config';
import {send} from './BasiceServer'

export const getData = ()=> {
    var api = "/oauth/token";
    
    return send(api, null,'GET');
};

export default {
    getData
}