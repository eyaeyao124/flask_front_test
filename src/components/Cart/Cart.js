import React,{useEffect,useState} from 'react';

const Cart = () => {
    const [CartList, setCartList] = useState([]);

    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cart')))
    }, [])

    return (
        <div>
            {
                CartList && CartList.map((item, index)=>{
                    return  <div key={index}>
                            <div>{item.rate}</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div>{item.price*item.count}</div>
                            <div>{item.date}</div>
                            </div>
                })
            }
        </div>
    )
}

export default Cart