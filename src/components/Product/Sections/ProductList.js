import React,{useEffect,useState, useCallback} from 'react'
import { useSelector } from "react-redux";

const ProductList = ({categorys}) => {
    const category = useSelector(state => state.productCategory);
    const filter = useSelector(state => state.productFilter);

    const [BasicList, setBasicList] = useState([]);
    const [List, setList] = useState([]);

    const selectList = useCallback(() => {
        if(Object.keys(category).length !== 0){
            setList(BasicList.filter(item => item.categoty2.includes(category.selectCategory)))
        }else{
            const lists = require(`../../../dummy/${categorys}/${categorys}.json`);
            setList(lists);
            setBasicList(lists);
        }
    })

    const selectFilter = useCallback(() => {
        // if(filter.selectFilter === "highPrice") {
        //     setList(List.sort((a,b)=>{return a.price-b.price }))
        // }else if(filter.selectFilter === "lowPrice") {
        //     setList(List.sort((a,b)=>{return b.price-a.price }))
        // }else if(filter.selectFilter === "rate") {
        //     setList(List.sort((a,b)=>{if(b.rate > a.rate) return -1 }))  
        // }else{
        //     setList(List.sort((a,b)=>{if(b.date > a.date) return -1 }))
        // }
        if(filter.selectFilter === "highPrice") {
            console.log(List)
            setList(List.sort((a,b)=>{return a.price-b.price }))
        }else if(filter.selectFilter === "lowPrice") {
            setList(List.sort((a,b)=>{return b.price-a.price }))
        }
    })

    useEffect(() => {
        selectList()
        selectFilter()
    }, [category, filter])
    
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