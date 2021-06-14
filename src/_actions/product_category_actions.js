import {SELECT_PRODUCT_CATEGORY} from './types';

export function selectProductCategory(data) {
    return {
        type:SELECT_PRODUCT_CATEGORY,
        payload: data
    }
}