import React, { Component } from 'react';
import { MainPreviewItem } from '../main-preview-item/main-preview-item';
class MainPreviewList extends Component {

    state = {
        menu: [],
        active: 0
    }
    componentDidUpdate(prevProps) {
        if (prevProps.menu !== this.props.menu && this.props.menu.length>0) {
            this.setState({ menu: this.menuToggler(this.props.menu)},console.debug(this.state.menu))
        }
        
    }

    menuToggler = (menu) => {
        return menu.map((item, index) => {
            return index === this.state.active ? { ...item, active: true } : { ...item, active: false }
        })
    }

    prevSlide = () => {
        this.setState(({active,menu }) => ({
            active: active>0? --active:menu.length-1,
            menu : this.menuToggler(menu)

        }))
        
    }
    nextSlide = () => {
        this.setState(({ active,menu }) => ({
            active: active<menu.length-1?++active:0,
            menu : this.menuToggler(menu)
        }))
        
    }
    render() {
        return (
            <>
                <button className="main-preview-prev" onClick={this.prevSlide}>&#10148;</button>
                {
                    this.state.menu.map((item, count) => {
                        return <MainPreviewItem item={item} active={item.active} key={count} />
                    })
                }
                <button className="main-preview-sec" onClick={this.nextSlide}>&#10148;</button>
            </>
        )
    }
}

export {
    MainPreviewList
}

