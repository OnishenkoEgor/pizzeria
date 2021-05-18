import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Block) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Block {...props} restoService={RestoService} />
                        
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;