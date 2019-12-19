import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import { Menu,Icon } from 'antd';
import menuList from '@/config/menuConfig';
import {connect} from 'react-redux';
import {switchMenu} from './../../redux/action/action'
import './Navbar.less';
const { SubMenu } = Menu;
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuList: null,
            menuKey: ''
        };
    }

    renderMenuList = (menuList) => {
        return menuList.map((item) => {
            if(item.children){
                return  (<SubMenu
                            key="item.key"
                            title={
                            <span>
                                {
                                    item.icon ? <Icon type={item.icon}/> : null
                                }
                                <span>{item.title}</span>
                            </span>
                            }
                        >
                            { this.renderMenuList(item.children) }
                        </SubMenu>)
                
            }
            return  (<Menu.Item 
                        key={item.key}
                        title={item.title}
                    >
                        <Link to={item.key}>
                            {
                                item.icon ? <Icon type={item.icon}/> : null
                            }
                            {item.title}
                        </Link>
                    </Menu.Item>)

        })
    }

    componentWillMount(){
        this.setState({
            menuKey: this.props.location.pathname
        })
    }
    handleClick = ({item,key}) => {
        const { dispatch } = this.props;
        console.log(item)
        dispatch(switchMenu(item.props.title))
        this.setState({
            menuKey: key
        })
    }
    componentDidMount(){
        this.setState({
            menuList: this.renderMenuList(menuList)
        })
        
    }
    render(){
        return(
            <div id="navBar">
                <Menu theme="dark" mode="inline" selectedKeys={this.state.menuKey} onClick={this.handleClick}>
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}
export default connect()(withRouter(Navbar))