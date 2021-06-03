import React from 'react';
import './main-info.scss';
const MainInfo = (props) => {
    console.log(props.text)
    return (
        <div className="main-info">
            {
                props.image &&
                <div className="main-info-image">
                    <img src={props.image} alt="" />
                </div>
            }
            <div className="main-info-text">
                <h2 className="main-info-title">{props.header}</h2>
                <p className="main-info-description">{props.text}</p>
            </div>
        </div>
    )
}

export {
    MainInfo
}