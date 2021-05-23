import React, { useEffect, useState } from 'react';
import './main-info.scss';
const MainInfo = (props)=>{
    const [text,setText] = useState('');

    useEffect(()=>{
        setText()
    })
    
    return(
        <div className="main-info">
            {
                props.info.image &&
                    <div className="main-info-image">
                        <img src={props.info.image} alt=""/>
                    </div>
            }
            <div className="main-info-text">
                <h2 className="main-info-title">{props.info.header}</h2>
                <p className="main-info-description">{text}</p>
            </div>
        </div>
    )
}

export{
    MainInfo
}