import React from 'react';

const AppContainer: React.FC = (): React.ReactElement => {
    return (
    <>
    <div id='app-container' style={{textAlign: 'center'}}>

        <h1>Get Your Bus Route</h1>
        <a href={'/busroute'}>Click Here!</a>
    </div>
    </>
    )
};

export default AppContainer;