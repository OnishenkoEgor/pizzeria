import React from 'react';
import './menu-list-item.scss';

const MenuListItem = (props) => {
    let menuItem = props.menuItem? setIcon(props.menuItem):'none'
    const { id, title, price, url, category, icon } = menuItem;
    const { addItemToCart } = props;
    return (

        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__icon" src={icon} alt={title}></img>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}</span></div>
            <button
                onClick={() => addItemToCart(id)}
                className="menu__btn">Add to cart</button>
        </li>

    )
}

export default MenuListItem


const setIcon = (item) => {
    switch (item.category) {
        case 'meat':
            return {
                ...item,
                icon: 'https://freeiconshop.com/wp-content/uploads/edd/meat-outline-filled.png'
            };
        case 'salads':
            return {
                ...item,
                icon: 'https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F957-green-salad-512.png'
            };
        case 'pizza':
            return {
                ...item,
                icon: 'https://previews.123rf.com/images/djvstock/djvstock1901/djvstock190102152/126397758-pizza-icon-over-white-background-colorful-design-vector-illustration.jpg'
            };
        default: return item
    }
}