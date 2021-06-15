import React from 'react';
import Category from './Sections/Category';
import ProductList from './Sections/ProductList';

const Product = ({match}) => {
    return (
        <div>
            <div>
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