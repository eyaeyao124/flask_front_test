import React from 'react';
import {CATEGORYS} from '../Config';

const NavBar = () => {
    return (
        <div>
            <div>메뉴 아이콘</div>
            <div>
                {CATEGORYS.map((item,index)=>{return <a href={`/category/${item}`} key={index}>{item}</a>})}
            </div>
            <div><a href={`/cart`}>장바구니</a></div>
        </div>
    )
}

export default NavBar

