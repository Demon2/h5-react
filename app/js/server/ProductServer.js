import Config,{venderId} from '../config';
import {send} from './BasiceServer'

export const getList = (offset, limit)=> {
    var api = `/public/package/list/55/8/${offset}/${limit}`;

    return send(api, null, 'GET');
};
export const getById = (id)=> {
    var api = `/public/package/select/${id}`;
    return send(api, null, 'GET');
};
export const getSku = (packageId, propertyValue)=> {
    var api = `/public/package/list/property/${packageId}/${venderId}?propertyValue=${propertyValue}`;
    return send(api, null, 'GET');
};

export default {
    getList,
    getById,
    getSku
}