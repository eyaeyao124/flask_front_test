import React,{useEffect,useState} from 'react';
import { Button, Image, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Cart = () => {
    const [CartList, setCartList] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);

    const deleteCart = (index) => {
        let deleteList = JSON.parse(localStorage.getItem('cart'));
        deleteList.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(deleteList));
        setCartList(deleteList)
        totalPrice()
    }

    const totalPrice = () => {
        const cartItem = JSON.parse(localStorage.getItem('cart'))
        const totalCost = cartItem.reduce((a, b) => { return a + (b.price*b.count)}, 0)
        setTotalPrice(totalCost)
    }

    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cart')))
        totalPrice()
    }, [])

    return (
        <div>
            {
                (!CartList || CartList.length === 0)?
                <div>장바구니가 비었습니다</div>
                :CartList.map((item, index)=>{
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
                                    <div>{item.price*item.count}</div>
                                    <div>{item.count}</div>
                                    <div>{item.date}</div>
                                    <Button icon={<DeleteOutlined />} onClick={()=>deleteCart(index)}>삭제</Button>
                                </Col>
                            </Row>
                })
            }
            <div>총 주문금액 {TotalPrice}</div>
            <Button type="primary">모두 주문하기</Button>
        </div>
    )
}

export default Cart