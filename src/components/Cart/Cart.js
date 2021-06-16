import React,{useEffect,useState} from 'react';
import { Button, Image, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './Cart.css';

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
        <div className="cart-wrapper">
            {
                (!CartList || CartList.length === 0)?
                <div className="empty-msg">장바구니가 비었습니다 :(</div>
                :CartList.map((item, index)=>{
                    return  <div key={index}>
                                <Row gutter={[16, 16]} justify="center" align="middle">
                                    <Col xs={24} sm={24} md={8} lg={8} xl={4}>
                                        <Image
                                            width='100%'
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            />
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={10}>
                                        <div className="cart-title">{item.title}</div>
                                        <div className="cart-desc"><span>설명</span> {item.description}</div>
                                        <div className="cart-desc"><span>가격</span> {item.price*item.count}</div>
                                        <div className="cart-desc"><span>수량</span> {item.count}</div>
                                        <div className="cart-desc"><span>평가</span> {item.rate}</div>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={4}>
                                        <Button icon={<DeleteOutlined />} onClick={()=>deleteCart(index)}>삭제</Button>
                                    </Col>
                                </Row>
                                <br/>
                            </div>
                })
            }
            <br/>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={8} lg={8} xl={4}><div className="total-price">총 주문금액 {TotalPrice}</div></Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={10}></Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={4}><Button type="primary" size="large">모두 주문하기</Button></Col>
            </Row>
        </div>
    )
}

export default Cart