import React from 'react';
import Category from './Sections/Category';
import ProductList from './Sections/ProductList';
import { Layout } from 'antd';
import './Product.css'

const { Content, Sider } = Layout;

const Product = ({match}) => {
    return (
        <div className="product-wrapper">
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={100} theme="light" collapsedWidth={0}>
                        <Category 
                            categorys={match.params.item}
                        />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}><ProductList categorys={match.params.item}/></Content>
            </Layout>
        </div>
    )
}

export default Product