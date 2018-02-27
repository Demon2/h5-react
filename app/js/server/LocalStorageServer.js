import {projectName} from 'config';

export const set = (key, value)=> {
    localStorage.setItem(`${key}`, JSON.stringify(value));
};
export const get = (key)=> {
    return JSON.parse(localStorage.getItem(`${key}`));
};
export const clear = ()=> {
    localStorage.clear();
};

export function setLoginId(loginid) {
	return set('loginid',loginid);
}

export function getLoginId() {
	return get('loginid');
}

export function getToken(loginid) {
	return  JSON.parse(get(loginid)).token;
}

export function getLoginInfo(loginid) {
  	return JSON.parse(get(loginid));
}

export function setLogInInfo(loginid,userinfo) {
	return set(loginid,JSON.stringify(userinfo))
}

export function setChoiceCategory(loginid,categoryid,categoryname) {
    var userinfo = getLoginInfo(loginid);
    userinfo["category"]= {
        categoryid: categoryid,
        categoryname: categoryname,
    };
    setLogInInfo(loginid,userinfo);
}

export function getChoiceCategory() {
    if(getLoginId()) {
        var userinfo = getLoginInfo(getLoginId());
        if(userinfo) {
            return userinfo.category;
        }
    }
    return null;
}

export function setChoiceLibrary(loginid,libraryid,libraryname) {
    var userinfo = getLoginInfo(loginid);
    userinfo["library"]= {
        libraryid: libraryid,
        libraryname: libraryname,
    };
    setLogInInfo(loginid,userinfo);
}

export function getChoiceLibrary() {
    if(getLoginId()) {
        var userinfo = getLoginInfo(getLoginId());
        if(userinfo) {
            return userinfo.library;
        }
    }
    return null;
}




export default {
    set,
    get,
    clear,
    getToken,
    getLoginId,
    setLoginId,
    getLoginInfo,
    setLogInInfo,
    getChoiceCategory,
    setChoiceCategory,
    getChoiceLibrary,
    setChoiceLibrary,
}