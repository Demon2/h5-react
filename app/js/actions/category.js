import CategoryServer from '../server/CategoryServer'
import config from '../config';
// import * as LoadingActions from './loading';

const Path = 'category';

export const CATEGORY = `${Path}/CATEGORY`;
export const CATEGORY_SUCCESS = `${Path}/CATEGORY_SUCCESS`;
export const CATEGORY_FAILURE = `${Path}/CATEGORY_FAILURE`;

export const SAVE_CTEGORY = `${Path}/SAVE_CTEGORY`;
export const SAVE_CTEGORY_SUCCESS = `${Path}/SAVE_CTEGORY_SUCCESS`;
export const SAVE_CTEGORY_FAILURE = `${Path}/SAVE_CTEGORY_FAILURE`;

export function getCategory() {
    return {
        type: CATEGORY,
        promise: CategoryServer.getData()
    }
}

export const saveCategoryAction = (userid,id,name)=> {
    return {
        type: SAVE_CTEGORY,
        promise: CategoryServer.setData(userid,id,name),
    }
};

export function saveCategory(userid,id,name) {
    return (dispatch)=> {
        return new Promise((resolve, reject)=> {
            const action = saveCategoryAction(userid,id,name);
            dispatch(action);
            action.promise.then(function (data) {
                resolve(data)
            })
        })
    }
}