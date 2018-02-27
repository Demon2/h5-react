require('es6-promise').polyfill();
import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch'
import {host} from '../config';
import cookie from 'react-cookie';
import {getCookie} from '../server/CookieServer'
import {projectName,token} from '../config'

let params = function (data) {
    var temp = [];
    for (var key in data) {
        temp.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return temp.join('&');
};

export function send(api, data, method = 'POST') {
    var option = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
        }
    };

     console.log(host+api);

    if (data)
        option.body = JSON.stringify(data);
    

    return new Promise((resolve, reject)=> {
        fetch(host + api, option)
            .then(response=> {
                console.log("dfsdf");
                response.json().then(function (json) {
                    console.log(json);
                    if (response.status >= 200 && response.status < 300) {
                        console.log(json);
                        resolve(json);
                    } else {
                        reject(json);
                    }
                })
            })
            .catch(error => {
                reject(error);
                console.log(error)
                console.error(`errorApi:${host + api}`);
            });
    });

}