import React from 'react';
import Category from './Category/Category';
import ProductList from './Category/ProductList';

const product = ({match}) => {

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

export default product