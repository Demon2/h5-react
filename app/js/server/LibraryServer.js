import Config from '../config'
import {send} from './BasiceServer'
import LocalStorageServer from './LocalStorageServer'


export const getData = (offset, limit)=> {
    var api = "/library";
    return send(api, null, 'GET');
};

export const setData = (userid,id,name)=> {
    var data= {
        id:id,
        name:name,
    };
    LocalStorageServer.setChoiceLibrary(userid,id,name);
	return new Promise((resolve, reject)=> {
        resolve(data);
    });
};

export default {
    getData,
    setData,
}