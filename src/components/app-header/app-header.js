import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link className="header__logo" to="/">
                <p>
                    Pizza
                </p>
                <span>
                    delicious
                </span>
            </Link>
            <div className="header__menu">
                <Link className="header__link" to="/">
                    Home
                </Link>
                <Link className="header__link" to="/menu/">
                    Menu
                </Link>
                <Link className="header__link" to="/services/">
                    Services
                </Link>
                <Link className="header__link" to="/about/">
                    About
                </Link>
                <Link className="header__link" to="/contact/">
                    Contact
                </Link>
                <Link className="header__link" to="/cart/">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total} $
                </Link>
            </div>
        </header>
    )
};

const mapDispatchToProps =(state)=>{
    let price;
    if(state.items.length>0){
        price = state.items.reduce((accum,item)=>{
            return item.count>1? accum+item.price*item.count: accum+item.price
        },0)
    }else{
        price= 0;
    }
    return{
        total:price
    }
}

export default connect(mapDispatchToProps)(AppHeader);