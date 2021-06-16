import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import { Button, Image, Row, Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Detail = ({match}) => {
    const history = useHistory();
    const lists = require(`../../dummy/${match.params.category}/${match.params.category}.json`);
    
    const [Item,setItem] = useState([]);
    const [Count,setCount] = useState(1);
    const [TotalPrice,setTotalPrice] = useState(0);
    const [BasicPrice,setBasicPrice] = useState(0);

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
                alert('이미 추가된 상품입니다.')
            }else{
                const addInfo = [...localInfo,itemInfo]
                localStorage.setItem('cart', JSON.stringify(addInfo));
                history.push("/cart");
            }
            
        }else{
            const itemInfo = [{...Item[0],...{"count":Count}}];
            localStorage.setItem('cart', JSON.stringify(itemInfo));
        }
    }
    
    useEffect(() => {
        const productItem = lists.filter(item => item.id === Number(match.params.id))
        setItem(productItem)
        setBasicPrice(productItem[0].price)
        setTotalPrice(productItem[0].price)
    }, [])

    return (
        <div>
            {
                Item && Item.map((item, index)=>{
                    return  <Row gutter={[16, 16]} key={index}>
                                <Col xl={6} lg={6} md={12} xs={24}>
                                    <Image
                                        width='100%'
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />
                                </Col>
                                <Col xl={6} lg={6} md={12} xs={24}>
                                    <div>{item.rate}</div>
                                    <div>{item.title}</div>
                                    <div>{item.description}</div>
                                    <div>{item.price}</div>
                                    <div>{item.date}</div>

                                    <Button.Group>
                                        <Button onClick={productDecrease} icon={<MinusOutlined />} />
                                        <Button onClick={productIncrease} icon={<PlusOutlined />} />
                                    </Button.Group>
                                    <div>합계 <span>{Count}</span></div>
                                    <div>금액 <span>{TotalPrice}</span></div>
                                    <div>
                                    <Button onClick={addCart}>장바구니</Button>
                                    <Button type="primary">주문하기</Button>
                                    </div>
                                </Col>
                            </Row>
                })
            }
        </div>
    )
}

export default Detail