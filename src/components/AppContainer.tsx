import React from 'react';

const AppContainer: React.FC = ({history}): React.ReactElement => {
    return (
    <>
    <div id='app-container'>

        <h1>Get Your Bus Route</h1>
        <button type='button' onClick={() => {history.push('/busroute')}}>Click Here!</button>
    </div>;
    </>
    )
};

export default AppContainer;