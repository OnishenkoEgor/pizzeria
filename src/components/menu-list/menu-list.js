import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';

class MenuList extends Component {


    render() {
        const { menuItems, addItemToCart } = this.props;
        return (
            <ul className="menu__list">
                {
                    menuItems.map((item, index) => {
                        return index < 6 ? <MenuListItem key={item.id} menuItem={item} addItemToCart={addItemToCart} /> : null;
                    })
                }
            </ul>
        )
    }
};

export default MenuList;