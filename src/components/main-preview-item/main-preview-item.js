import React from 'react';
import './main-preview-item-style.css'
const MainPreviewItem = ({ item,active }) => {
    const { title, url} = item
    return (
        <div className={active ? "main-preview-item active":"main-preview-item "}>
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    )
}
export {
    MainPreviewItem
}