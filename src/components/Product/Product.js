import React from 'react';
import Category from './Sections/Category';
import ProductList from './Sections/ProductList';
import { Layout } from 'antd';

const { Content, Sider } = Layout;

const Product = ({match}) => {
    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200} theme="light">
                        <Category 
                            categorys={match.params.item}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}><ProductList categorys={match.params.item}/></Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export default Product