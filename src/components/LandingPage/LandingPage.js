import React from 'react';
import category from '../../dummy/category/menu_category.json';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const LandingPage = () => {
    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-card-wrapper">
                    <Row gutter={[16, 16]}>
                        {category.map((item,index)=>{
                            return <Col key={index} xl={4} lg={6} md={8} xs={24}>
                                        <div style={{ position: 'relative' }}>
                                            <a href={`/category/${item.category}`}>
                                                <img style={{ width: '100%', height: '320px' }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="main category" />
                                            </a>
                                            <div>
                                                {item.menu_name}
                                            </div>
                                        </div>   
                                   </Col>})
                        }
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default LandingPage