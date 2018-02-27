import { browserHistory,hashHistory } from 'react-router';
const history = hashHistory;

const push = history.push;
const replace = history.replace;
export {
    push,
    replace
}
export default history;

