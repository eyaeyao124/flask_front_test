import { combineReducers } from 'redux';
import productCategory from './product_category_reducer';

const rootReducer = combineReducers({
    productCategory
});

export default rootReducer;