import React from "react";

const AppContainer: React.FC = (): React.ReactElement => {
    return (
        <>
            <div id="app-container" style={{ textAlign: "center" }}>
                <h1>Find Your Departure</h1>
                <button><a href={"/busroute"}>Click Here To Get Started!</a></button>
            </div>
        </>
    );
};

export default AppContainer;
