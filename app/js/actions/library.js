import LibraryServer from '../server/LibraryServer'
import config,{limit} from '../config';
// import * as LoadingActions from './loading';

const Path = 'library';

export const LIBRARY = `${Path}/LIBRARY`;
export const LIBRARY_SUCCESS = `${Path}/LIBRARY_SUCCESS`;
export const LIBRARY_FAILURE = `${Path}/LIBRARY_FAILURE`;

export const SAVE_LIBRARY = `${Path}/SAVE_LIBRARY`;
export const SAVE_LIBRARY_SUCCESS = `${Path}/SAVE_LIBRARY_SUCCESS`;
export const SAVE_LIBRARY_FAILURE = `${Path}/SAVE_LIBRARY_FAILURE`;


export function getLibrary() {
    return {
        type: LIBRARY,
        promise: LibraryServer.getData()
    }
}

export const saveLibraryAction = (userid,id,name)=> {
    return {
        type: SAVE_LIBRARY,
        promise: LibraryServer.setData(userid,id,name),
    }
};

export function saveLibrary(userid,id,name) {
	return (dispacth) => {
		return new Promise((resolve, reject)=>{
			const action = saveLibraryAction(userid,id,name);
			dispacth(action);
			action.promise.then(function(data){
				resolve(data);
			})
		})
	}
}
