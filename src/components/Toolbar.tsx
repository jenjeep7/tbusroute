import * as React from 'react';


export interface ToolBarProps {
};

const ToolBar = ({}: ToolBarProps) => {

    return (
        <div id="toolbar">
            <button><a className="left" href="/">Home</a></button>
            <h1 style={{color: "white"}}>Bus Route</h1>
        </div>
    )
}

export default ToolBar;