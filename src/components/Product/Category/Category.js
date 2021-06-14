import React from 'react';

const Category = ({categorys}) => {
    const lists = require(`../../../dummy/category/${categorys}_side_category.json`);

    return (
        <div>
            {lists.map((item,index)=>{return <div key={index}><a href={`/category/${item.category}`}>{item.menu_name}</a></div>})}
        </div>
    )
}

export default Category