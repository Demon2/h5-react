import Config from '../config'
import {send} from './BasiceServer'

import LocalStorageServer from './LocalStorageServer'

export const getData = () => {
	var api = '/knowledgepoint';
	return send(api,null,'GET');
}

export default {
	getData,
}