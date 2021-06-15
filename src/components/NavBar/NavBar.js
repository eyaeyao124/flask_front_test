import React from 'react';
import category from '../../dummy/category/menu_category.json';

const NavBar = () => {
    return (
        <div>
            <div><a href='/'>메뉴 아이콘</a></div>
            <div>
                {category.map((item,index)=>{return <a href={`/category/${item.category}`} key={index}>{item.menu_name}</a>})}
            </div>
            <div><a href={`/cart`}>장바구니</a></div>
        </div>
    )
}

export default NavBar

