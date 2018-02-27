import {send} from './BasiceServer'

export const login = (name,password)=>{
	var api = '/login';
	var data = {
		name:name,
		password:password
	}
	return send(api, data);
}

export default  {
	login,
}