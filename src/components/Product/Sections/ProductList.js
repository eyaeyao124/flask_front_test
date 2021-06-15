import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import Filter from './Filter';

const ProductList = ({categorys}) => {
    const category = useSelector(state => state.productCategory);

    const [BasicList, setBasicList] = useState([]);
    const [List, setList] = useState([]);

    const selectFilter = (name) => {
        if(name === "lowPrice") {
            setList([...List].sort((a,b)=>{return a.price-b.price }))
        }else if(name === "highPrice") {
            setList([...List].sort((a,b)=>{return b.price-a.price }))
        }else if(name === "rate") {
            setList([...List].sort((a,b)=>{return (b.rate < a.rate)? -1 : (a.rate === b.rate)? 0 : 1}))  
        }else{
            setList([...List].sort((a,b)=>{return (b.date > a.date)?-1 : ((a.date === b.date)? 0 : 1)}))
        }
    }

    const selectList = () => {
        if(Object.keys(category).length !== 0){
            setList(BasicList.filter(item => item.categoty2.includes(category.selectCategory)))
        }else{
            const lists = require(`../../../dummy/${categorys}/${categorys}.json`);
            setList(lists);
            setBasicList(lists);
        }
    }

    useEffect(() => {
        selectList()
    }, [category])
    
    return (
        <div>
            <Filter filterFunc={selectFilter}/>
           {
            List && List.map((item,index)=>{
                return <div key={index}>
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