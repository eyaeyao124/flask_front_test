import React from 'react';
import Category from './Sections/Category';
import ProductList from './Sections/ProductList';
import Filter from './Sections/Filter';

const Product = ({match}) => {
    return (
        <div>
            <div>
                <Filter />
                <Category 
                    categorys={match.params.item}
                />
                <ProductList 
                    categorys={match.params.item}
                />
            </div>
        </div>
    )
}

export default Product