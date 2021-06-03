import React, { Component } from 'react';
import WithRestoService from '../hoc';
import { MainInfo } from '../main-info/main-info';

class MainInfoWrapper extends Component {
    state = {
        counter: 0,
        interval: null,
        info: {},
        textArr:[]
    }
    componentDidMount() {
        this.props.restoService.getMainInfo()
            .then(res => {
                this.setState({ info: res })
            })
        this.setState({interval:setInterval(()=>{this.textTyper()},10)})
    }

    componentDidUpdate(){
        if(this.state.info.text&&this.state.counter==this.state.info.text.length){
            clearInterval(this.state.interval)
        }
    }

    textTyper = () => {
        if (this.state.info.text) {
            this.setState(({textArr})=>{
                let newArr = textArr;
                newArr.push(this.state.info.text.split('')[this.state.counter++])
                return{
                    textArr:newArr
                }
            })
        } 
    }

    render() {
        return (
            <MainInfo header={this.state.info.header} image={this.state.info.image} text={this.state.textArr.join('')} />
        )
    }
}
export default WithRestoService()(MainInfoWrapper)