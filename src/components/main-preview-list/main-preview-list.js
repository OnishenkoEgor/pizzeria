import React, { useEffect, useState } from 'react';
import { MainPreviewItem } from '../main-preview-item/main-preview-item';
const MainPreviewList = (props) => {

    const [menu, setMenu ] = useState([]);
    useEffect(() => {
        setMenu(props.menu)
    })

    function nextSlide(){
        
    }
    function prevSlide(){

    }
    console.debug(menu)
    return (
        <>
            <button className="main-preview-prev" onClick={prevSlide()}>&#10148;</button>
            {
                menu.map((item,count)=>{
                    return <MainPreviewItem item={item} active={item.active} key={count}/>
                })
            }
            <button className="main-preview-sec" onClick={nextSlide()}>&#10148;</button>
        </>
    )
}
export {
    MainPreviewList
}

