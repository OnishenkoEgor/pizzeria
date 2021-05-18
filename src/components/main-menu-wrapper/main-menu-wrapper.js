import React, { Component } from 'react';
import WithRestoService from '../hoc';
import {MainMenuList} from '../main-menu-list/main-menu-list'
import './main-preview-wrapper-style.css';

class MainMenuWrapper extends Component{
    state={
        menuItems:[]
    }
    componentDidMount(){
            // this.setState(({menuItems})=>({
            //     menuItems:this.props.restoService.getMenuItems()
            // }))
    }
    render(){
        
        return(
            <div className="main-menu">
                <MainMenuList items={this.state.menuItems}/>
            </div>
        )
    }
}
export default WithRestoService()(MainMenuWrapper)
