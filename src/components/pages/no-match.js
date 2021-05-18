import React from 'react';
import { withRouter } from 'react-router-dom';

const NoMatch = (props)=>{
    console.debug('no match page')
    return(
        <h2 style={{color:'#d1d1d1',margin:'50px auto',display:'block',textAlign:'center'}}>
            Не существует страницы {props.location.pathname}
        </h2>
    )
}
export default withRouter(NoMatch)