import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs';
import {isEmptyObject,objectLength} from 'js/util'

import {
    GET_CART_LIST_SUCCESS,
    SELECT_TOGGLE,
    SELECT_ALL_TOGGLE,
    FLOAT_ICON_VISIBLE,
    CHANGE_AMOUNT,
    SET_INIT_DATA
} from '../actions/cart'

const initState = fromJS({
    list: [],
    totalAmount: 0,
    floatIconVisible: false,
    userSelectList: {},
    checkedAll: false,
    totalMoney: 0
});


const getPackageTotalMoney = function (cartItem) {
    return (cartItem.packagePrice * cartItem.amount * 100).toFixed(2) / 100;
};


export default createReducer(initState, {
    [GET_CART_LIST_SUCCESS]: (state, action) => {
        return state.merge({
            list: action.data.result,
            totalAmount: action.data.result.length
        });
    },
    [SET_INIT_DATA]: (state, action) => {
        return state.merge({
            ...action.data
        });
    },
    [FLOAT_ICON_VISIBLE]: (state, action) => {
        return state.merge({
            floatIconVisible: action.visible
        });
    },
    [SELECT_TOGGLE]: (state, action) => {
        let {list,userSelectList,totalMoney,checkedAll} = state.toJS();
        let itemMoney = getPackageTotalMoney(list[action.index]);
        list[action.index].checked = !list[action.index].checked;

        if (userSelectList[action.index]) {
            delete userSelectList[action.index];
            totalMoney = (Number(totalMoney) - itemMoney).toFixed(2);
        } else {
            userSelectList[action.index] = list[action.index];
            totalMoney = (Number(totalMoney) + itemMoney).toFixed(2);
        }

        checkedAll = objectLength(userSelectList) == list.length;

        return state.merge({
            list,
            userSelectList,
            totalMoney,
            checkedAll
        });
    },
    [SELECT_ALL_TOGGLE]: (state, action) => {
        let {list,checkedAll,userSelectList,totalMoney} = state.toJS();
        checkedAll = !checkedAll;
        totalMoney = 0;
        userSelectList = {};

        list.map((item, index)=> {
            if (checkedAll) {
                userSelectList[index] = item;
                totalMoney = (Number(totalMoney) + getPackageTotalMoney(item)).toFixed(2);
            }
            item.checked = checkedAll;
            return item;
        });

        return state.merge({
            list,
            checkedAll,
            userSelectList,
            totalMoney
        });
    },
    [CHANGE_AMOUNT]: (state, action) => {
        let {list,userSelectList,totalMoney} = state.toJS();

        if (list[action.index].checked) {
            totalMoney = (Number(totalMoney) - getPackageTotalMoney(list[action.index])).toFixed(2);
        }

        list[action.index].amount = action.amount;

        if (list[action.index].checked) {
            userSelectList[action.index] = list[action.index];
            totalMoney = (Number(totalMoney) + getPackageTotalMoney(list[action.index])).toFixed(2);
        }

        return state.merge({
            list,
            totalMoney,
            userSelectList
        });
    }
})
