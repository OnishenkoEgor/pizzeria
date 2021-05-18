import React from 'react';
import './cart-table.scss';

const CartTable = (props) => {
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    props.items.map(item => {
                        const { id, title, price, url,count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}</div>
                                <div
                                    onClick={() => props.deleteItemFromCart(id)}
                                    className="cart__close">&times;</div>
                                <div className="cart__item-counter">
                                    <span>
                                        {count}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default CartTable;