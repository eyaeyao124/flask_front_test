import React,{useEffect,useState} from 'react';
import { useSelector } from "react-redux";
import Filter from './Filter';
import { Row, Col } from 'antd';
import './ProductList.css'

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
            <br/>
            <Row gutter={[16, 16]}>
                {
                List && List.map((item,index)=>{
                    return <Col key={index} xl={4} lg={6} md={8} xs={24}>
                                <div style={{ position: 'relative' }} className="product-list-wrapper">
                                    <a href={`/detail/${categorys}/${item.id}`} >
                                        <img style={{ width: '100%', height: '300px' }} src={item.image} alt="products"/>
                                    </a>
                                    <div>
                                        <div className="product-title">{item.title}</div>
                                        <div className="product-price">{item.price} 원</div>
                                        <div className="product-rate">평점: {item.rate}</div>
                                    </div>
                                </div>    
                            </Col>
                })
                }
           </Row>
        </div>
    )
}

export default ProductList