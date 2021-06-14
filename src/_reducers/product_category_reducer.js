import {SELECT_PRODUCT_CATEGORY} from '../_actions/types';

export default function(state={},action){
    switch(action.type){
        case SELECT_PRODUCT_CATEGORY:
            return {...state, selectCategory: action.payload }
        default:
            return state;
    }
}