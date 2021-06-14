import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";

const ProductList = ({categorys}) => {
    const category = useSelector(state => state.productCategory);
    const [BasicList, setBasicList] = useState([]);
    const [List, setList] = useState([]);

    useEffect(() => {
        selectList()
    }, [category])

    const selectList = () => {
        if(Object.keys(category).length != 0){
            setList(BasicList.filter(item => item.categoty2.includes(category.selectCategory)))
        }else{
            const lists = require(`../../../dummy/${categorys}/${categorys}.json`);
            setList(lists);
            setBasicList(lists);
        }
    }
    
    return (
        <div>
           {
            List.map((item)=>{
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