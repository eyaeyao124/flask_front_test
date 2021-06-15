import React from 'react';
import { useDispatch } from 'react-redux';
import { selectProductCategory } from '../../../_actions/product_category_actions';
import { Menu } from 'antd';

const Category = ({categorys}) => {
    const dispatch = useDispatch();
    const lists = require(`../../../dummy/category/${categorys}_side_category.json`);

    const selectCategory = (name) => {
        dispatch(selectProductCategory(name))
    }

    return (
        <Menu
            mode="inline"
        >
            {lists.map((item,index)=>{return <Menu.Item key={index} onClick={()=>selectCategory(item.menu_name)}>{item.menu_name}</Menu.Item>})}
        </Menu>
    )
}

export default Category