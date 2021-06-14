import React from 'react';

const ProductList = ({categorys}) => {
    const lists = require(`../../../dummy/${categorys}/${categorys}.json`);
    return (
        <div>
           {
            lists.map((item)=>{
                return <div key={item.id}>
                    <div>{item.image}</div>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <div>{item.rate}</div>
                </div>
            })
           } 
        </div>
    )
}

export default ProductList