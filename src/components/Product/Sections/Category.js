import React from 'react';
import { useDispatch } from 'react-redux';
import { selectProductCategory } from '../../../_actions/product_category_actions'

const Category = ({categorys}) => {
    const dispatch = useDispatch();
    const lists = require(`../../../dummy/category/${categorys}_side_category.json`);

    const selectCategory = (name) => {
        dispatch(selectProductCategory(name))
    }

    return (
        <div>
            {lists.map((item,index)=>{return <div key={index}><button onClick={()=>selectCategory(item.menu_name)}>{item.menu_name}</button></div>})}
        </div>
    )
}

export default Category