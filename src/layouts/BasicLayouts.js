import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import Navbar from '@/components/Navbar/Navbar';
import {connect} from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }} className="layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Navbar></Navbar>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{this.props.name}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            
                            {this.props.children}
                            
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
    componentWillMount(){
        console.log()
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}
export default connect(mapStateToProps)(BasicLayout)