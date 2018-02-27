import config,{limit} from '../config';

const Path = 'loading';

export const LOADING_SHOW = `${Path}/LOADING_SHOW`;
export const LOADING_HIDE = `${Path}/LOADING_HIDE`;

export function show(messge="正在加载") {
    return {
        type: LOADING_SHOW,
        messge
    }
}
export function hide() {
    return {
        type: LOADING_HIDE
    }
}