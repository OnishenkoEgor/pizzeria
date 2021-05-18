const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_LOADING'
    }
}
const menuErrored = () => {
    return {
        type: 'MENU_ERRORED'
    }
}
const addItemToCart = (id) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: id
    }
}
const deleteItemFromCart = (id)=>{
    return{
        type:'DELETE_ITEM_FROM_CART',
        payload:id
    }
}
const clearItemsFromCart = ()=>{
    return{
        type:'CLEAR_CART'
    }
}
export {
    menuLoaded,
    menuRequested,
    menuErrored,
    addItemToCart,
    deleteItemFromCart,
    clearItemsFromCart
}