import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';

class MenuList extends Component {


    render() {
        const { menuItems, addItemToCart } = this.props;
        return (
            <ul className="menu__list">
                {
                    menuItems.map(item => {
                        return (
                            <MenuListItem key={item.id} menuItem={item} addItemToCart={addItemToCart} />
                        )
                    })
                }
            </ul>
        )
    }
};

export default MenuList;