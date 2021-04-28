import React from 'react';

const UpdatedComponent = OriginalComp => {
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name = "balayya" />;
        }
    }
    return NewComp;
}

export default UpdatedComponent;