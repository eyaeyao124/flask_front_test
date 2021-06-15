import { SELECT_PRODUCT_FILTER } from './types';

export function selectProductFilter(data) {
    return {
        type:SELECT_PRODUCT_FILTER,
        payload: data
    }
}