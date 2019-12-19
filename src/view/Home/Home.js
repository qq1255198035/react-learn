import React, { Component } from 'react';
import { Button } from 'antd';
import './Home.less';
import {getExample} from '@/api/api'
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    }
    componentWillMount(){
        // getExample().then(res => {
        //     console.log(res)
        // })
    }

    render() {
        return(
            
                <div className="Home">
                    <h1>
                        hello rea
                    </h1>
                    <Button type="primary" onClick={(e) => this.handleClick(1,e)}>
                        {this.state.isToggleOn ? 'On' : 'Off'}
                    </Button>
                </div>
            
            
        )
    }

    handleClick(e,a){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
        console.log(e,a)
    }
}

export default Home;
