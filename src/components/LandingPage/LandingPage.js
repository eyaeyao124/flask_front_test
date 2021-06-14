import React from 'react';
import category from '../../dummy/category/menu_category.json';

const LandingPage = () => {
    return (
        <div>
            {category.map((item,index)=>{return <div key={index}><a href={`/category/${item.category}`}>{item.menu_name}</a></div>})}
        </div>
    )
}

export default LandingPage