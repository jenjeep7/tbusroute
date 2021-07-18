import * as React from "react";

export interface ToolBarProps {}

const ToolBar = ({}: ToolBarProps) => {
    return (
        <div id="toolbar">
            <button style={{margin: "20px"}}>
                <a href="/">
                    Home
                </a>
            </button>
            <h1 style={{ color: "white", margin: '0' }}>Departures</h1>
        </div>
    );
};

export default ToolBar;
