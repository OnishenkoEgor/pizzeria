import React, { Component } from 'react';
import WithRestoService from '../hoc';
import { MainInfo } from '../main-info/main-info';

class MainInfoWrapper extends Component {
    state={
        info:{}
    }
    componentDidMount(){
        this.props.restoService.getMainInfo()
        .then(res=>{
            this.setState({info:res})
        })
    }
    render() {
        return (
            <>
                <MainInfo info={this.state.info}/>
            </>
        )
    }
}
export default WithRestoService()(MainInfoWrapper)