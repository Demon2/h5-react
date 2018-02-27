import {send} from './BasiceServer'


export const getLiabrary = ()=> {
	var api = 'getliabrary';
	return send(api,null,'GET');
}

export default {
	getLiabrary,
}