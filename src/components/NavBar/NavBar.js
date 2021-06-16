import React from 'react';
import category from '../../dummy/category/menu_category.json';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Header} = Layout;

const NavBar = () => {
    return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor:"#fff" }}>
                <Menu theme="light" mode="horizontal">
                    <Menu.Item key="999"><a href='/'>HOME</a></Menu.Item>
                    {category.map((item,index)=>{return <Menu.Item key={index}><a href={`/category/${item.category}`}>{item.menu_name}</a></Menu.Item>})}
                    <Menu.Item key="998"><a href={`/cart`}>장바구니</a></Menu.Item>
                </Menu>
            </Header>
    )
}

export default NavBar

