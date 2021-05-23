import React, { Component } from 'react';
import { connect } from 'react-redux';
import { menuLoaded, menuRequested, menuErrored, addItemToCart } from '../../actions';
import Error from '../error';
import Spinner from '../spinner';
import MenuList from '../menu-list';
import WithRestoService from '../hoc';
import './menu-list-wrapper.scss';
class MenuListWrapper extends Component {

    componentWillMount() {
        this.props.menuRequested();
        const { restoService, menuErrored, menuLoaded } = this.props;
        restoService.getMenuItems()
        .then(res => {
            return menuLoaded(res);
        }).catch(e => {
            console.log('Component catch error ', e);
            menuErrored();
        })

    }

    render() {
        let { menuItems, loading, error } = this.props;
        return (
            <div className="menu">
                <h2>Our menu</h2>
                <p>There could be a nice description for our menu here</p>
            {
            error ?
            <Error /> :
            loading ?
                <Spinner /> :
                <MenuList menuItems={menuItems} addItemToCart={this.props.addItemToCart} />
            }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuErrored,
    addItemToCart
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuListWrapper));




