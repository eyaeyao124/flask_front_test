import { combineReducers } from 'redux';
import productCategory from './product_category_reducer';
import productFilter from './product_filter_reducer';

const rootReducer = combineReducers({
    productCategory, productFilter
});

export default rootReducer;