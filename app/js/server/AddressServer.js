import Config,{venderId} from '../config';
import {send} from './BasiceServer'

export const add = function (data) {
    var api = '/user/deliveryaddress/add';
    return send(api, data);
};
export const update = function (data) {
    var api = '/user/deliveryaddress/update';
    return send(api, data);
};
export const del = function (addressId) {
    var api = '/user/deliveryaddress/delete';
    return send(api, {addressId: addressId});
};
export const getList = function () {
    var api = '/user/deliveryaddress/list';
    return send(api, null, 'GET');
};
export const getById = function (deliveryAddressId) {
    var api = '/deliveryaddress/selectbyid/' + deliveryAddressId;
    return send(api, null, 'GET');
};

export default {
    add, update, del, getList, getById
}