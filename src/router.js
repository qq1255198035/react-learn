import React from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App'
import Home from '@/view/Home/Home'
import User from '@/view/User/User'
import File from '@/view/File/File'
import Button from '@/view/Button/Button'
import NotFound from '@/view/404'
import BasicLayouts from '@/layouts/BasicLayouts'
import BlankLayout from '@/layouts/BlankLayout'
export default class Router extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/ui" render={() => 
                            <BlankLayout>
                                <Switch>
                                    <Route path="/ui/model" component={User}/>
                                    <Route path="/ui/button" component={Button}/>
                                    
                                </Switch>
                            </BlankLayout>
                        } />
                        <Route path="/" render={() => 
                            <BasicLayouts>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/file" component={File}></Route>
                                    
                                    <Redirect to='/home'/>
                                </Switch>
                                    
                            </BasicLayouts>
                        } />
                        <Route component={NotFound}></Route>
                    </Switch>
                    {/* <Switch>
                        <BasicLayouts>
                            <Switch>
                                <Route path="/" exact render={() => <Redirect to='/home'/>}></Route>
                                <Route path="/home" exact component={Home}/>
                            </Switch>
                        </BasicLayouts>
                        <BlankLayout>
                            <Switch>
                                <Route path="/user" exact component={User}></Route>
                            </Switch>
                        </BlankLayout>
                    </Switch> */}
                    
                </App>
            </HashRouter>
        );
    }
}