//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutablejs';
import token from './token'
import login from './login'
import category from './category'
import library from './library'
import knowledgepoint from './knowledgepoint'
import product from './product'
import loading from './loading'
import cart from './cart'
import vender from './vender'
import order from './order'
import address from './address'
import transition from './transition'

const rootReducer = combineReducers({
    token,
    login,
    category,
    library,
    knowledgepoint,
    product,
    loading,
    cart,
    vender,
    order,
    address,
    transition
});
export default rootReducer;
