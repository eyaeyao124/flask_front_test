import React,{useEffect,useState} from 'react';
import category from '../../dummy/category/menu_category.json';
import { Row, Col } from 'antd';
import './Landing.css'

const LandingPage = () => {
    const [Categorys, setCategorys] = useState([]);

    useEffect(() => {
        setCategorys(category)
    }, [])
    return (
        <div className="site-card-wrapper">
            {!Categorys?
            <div>Loading...</div>
            :
            <Row gutter={[16, 16]} justify="center" align="middle">
                {category.map((item,index)=>{
                return <Col key={index} xl={8} lg={8} md={8} xs={24}>
                            <div className="card-div">
                                <a href={`/category/${item.category}`}>
                                    <img style={{ width: '100%', height: '400px' }} src={item.image} alt="main category" title={`${item.category}`}/>
                                </a>
                                <div className="card-info">
                                    <h1>{item.menu_name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>   
                        </Col>})
                }
            </Row>
            }
        </div>
    )
}

export default LandingPage