import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import { Button, Image, Row, Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './Detail.css';

const Detail = ({match}) => {
    const history = useHistory();
    const lists = require(`../../dummy/${match.params.category}/${match.params.category}.json`);
    
    const [Item,setItem] = useState([]);
    const [Count,setCount] = useState(1);
    const [TotalPrice,setTotalPrice] = useState(0);
    const [BasicPrice,setBasicPrice] = useState(0);
    const [SippingPee,setSippingPee] = useState(0);

    const productIncrease = () => {
        setCount(Count+1)
        setTotalPrice(TotalPrice + BasicPrice)
    }

    const productDecrease = () => {
        if(Count !== 1) {
            setCount(Count-1)
            setTotalPrice(TotalPrice - BasicPrice)
        }
    }

    const addCart = () => {
        if(localStorage.getItem('cart')) {
            const localInfo = JSON.parse(localStorage.getItem('cart'));
            const itemInfo = {...Item[0],...{"count":Count}};

            const valueCompare = localInfo.findIndex(
                item => item.id === Item[0].id && item.categoty ===  Item[0].categoty  
            );

            if(valueCompare !== -1){
                alert('이미 추가된 상품입니다.');
            }else{
                const addInfo = [...localInfo,itemInfo]
                localStorage.setItem('cart', JSON.stringify(addInfo));
                history.push("/cart");
            }
            
        }else{
            const itemInfo = [{...Item[0],...{"count":Count}}];
            localStorage.setItem('cart', JSON.stringify(itemInfo));
            history.push("/cart");
        }
    }

    const order = () => {
        if(localStorage.getItem('cart')) {
            const localInfo = JSON.parse(localStorage.getItem('cart'));
            const valueCompare = localInfo.findIndex(
                item => item.id === Item[0].id && item.categoty ===  Item[0].categoty  
            );

            if(valueCompare !== -1){
                alert('장바구니에 이미 추가된 상품입니다.');
                history.push("/cart");
            }else{
                alert(`총 주문금액 ${TotalPrice+SippingPee}으로 주문 처리 되었습니다.`);
            }
            
        }else{
            alert(`총 주문금액 ${TotalPrice+SippingPee}으로 주문 처리 되었습니다.`);
        }
    }
    
    useEffect(() => {
        const productItem = lists.filter(item => item.id === Number(match.params.id))
        setItem(productItem)
        setBasicPrice(productItem[0].price)
        setTotalPrice(productItem[0].price)
        setSippingPee(2500)
    }, [])

    return (
        <div className="detail-wrapper">
            {
                Item && Item.map((item, index)=>{
                    return  <Row gutter={[16, 16]} key={index} justify="center">
                                <Col xl={6} lg={8} md={12} xs={24}>
                                    <Image
                                        width='100%'
                                        height="400px"
                                        src={item.image}
                                        />
                                </Col>
                                <Col xl={6} lg={8} md={12} xs={24}>
                                    <div className="detail-title"><span>{item.title}</span> <span>평점: {item.rate}</span></div>
                                    <div className="detail-desc"><span>설명</span> {item.description}</div>
                                    <div className="detail-desc"><span>정가</span> {item.price}</div>
                                    <div className="detail-desc"><span>등록일</span> {item.date}</div>
                                    <div className="count-wrapper">
                                    <span>수량</span>
                                    <Button.Group className="count-btn-wrapper">
                                        <Button onClick={productDecrease} icon={<MinusOutlined />} />
                                        <span>{Count}</span>
                                        <Button onClick={productIncrease} icon={<PlusOutlined />} />
                                    </Button.Group>
                                    </div>
                                    <div className="price-wrapper"><span>금액</span> <span>{TotalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</span></div>
                                    <div className="shipping-pee"><span>배송비</span> <span>2,500원</span></div>
                                    <div className="submit-btn-wrapper">
                                    <Button size="large" onClick={addCart}>장바구니</Button>
                                    <Button size="large" type="primary" onClick={order}>주문하기</Button>
                                    </div>
                                </Col>
                            </Row>
                })
            }
        </div>
    )
}

export default Detail