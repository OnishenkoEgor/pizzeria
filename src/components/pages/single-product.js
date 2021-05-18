import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import Spinner from '../spinner';
import { menuLoaded, menuRequested, menuErrored } from '../../actions'
import MenuListItem from '../menu-list-item';

class SingleProduct extends Component {
    componentDidMount() {
        if (this.props.menuItems.length === 0) {
            this.props.menuRequested();
            this.props.restoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(e => console.log('error in single product - ', e))
        }
    }
    render() {
        const { menuItems } = this.props;
        console.log(menuItems)
        const item = menuItems.find(item => +item.id === +this.props.match.params.id);
        return this.props.loading ? <Spinner /> : <MenuListItem menuItem={item} />
    }
}
const MapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
},
    MapDispatchToProps = {
        menuLoaded,
        menuRequested,
        menuErrored
    }
export default WithRestoService()(connect(MapStateToProps, MapDispatchToProps)(SingleProduct))