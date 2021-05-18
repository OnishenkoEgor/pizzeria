import React from 'react';
import { connect } from 'react-redux';
import CartTable from '../cart-table';
import {deleteItemFromCart, clearItemsFromCart} from '../../actions';
import WithRestoService from '../hoc'
const CartPage = (props) => {
    const orderButton = props.items.length>0?
        <button
             className='menu__btn' 
             style={{ margin: '20px auto',display:'block'}}
             onClick={
                ()=> {
                    props.restoService.sendData(props.items);
                    props.clearItemsFromCart();
                }
             }>Заказать</button>:
         null;
    return (
        <div className="cart"> 
            <CartTable items={props.items} deleteItemFromCart={props.deleteItemFromCart} />
            {orderButton}
        </div>
    )
}

const mapStateToProps = ({items})=>{
    return{
        items
    }
}
const mapDispatchToProps = {
    deleteItemFromCart,
    clearItemsFromCart
}
export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(CartPage));