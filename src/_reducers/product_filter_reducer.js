import {SELECT_PRODUCT_FILTER} from '../_actions/types';

export default function(state={selectFilter:"latest"},action){
    switch(action.type){
        case SELECT_PRODUCT_FILTER:
            return {...state, selectFilter: action.payload }
        default:
            return state;
    }
}