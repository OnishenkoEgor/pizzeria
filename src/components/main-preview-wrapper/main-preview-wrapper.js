import React, { Component } from 'react'
import { connect } from 'react-redux';
import WithRestoService from '../hoc'
import { MainPreviewList } from '../main-preview-list/main-preview-list';
import './main-preview-wrapper-style.css';
import { menuLoaded, menuRequested, menuErrored } from '../../actions'
class MainPreviewWrapper extends Component {

    componentWillMount() {
        const { menuRequested, restoService, menuLoaded, menuErrored } = this.props;
        menuRequested();
        restoService.getMenuItems()
            .then(res => {
                menuLoaded(res);
            })
            .catch(err => {
                console.error('main-preview-wrapper was errored', err);
                menuErrored();
            })
    }

    render() {
        return (
            <div className="main-preview">
                <MainPreviewList menu={this.props.menu} loading={this.props.loading} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        loading: state.loading
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuErrored
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MainPreviewWrapper));