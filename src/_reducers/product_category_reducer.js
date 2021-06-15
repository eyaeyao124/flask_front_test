import {SELECT_PRODUCT_CATEGORY} from '../_actions/types';

function categoryReducer(state={},action){
    switch(action.type){
        case SELECT_PRODUCT_CATEGORY:
            return {...state, selectCategory: action.payload }
        default:
            return state;
    }
}

export default categoryReducer;