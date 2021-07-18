import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/reducers/configureStore";
import { Provider } from "react-redux";

import "./theme.scss";
import initialState from "./store/reducers/initialState";
import { getProviders, getRoutes } from "./store/actions/routeActions";

const renderApp = async () => {
    const existingProviders = await getProviders();
    const existingRoutes = await getRoutes();

    const state = Object.assign({}, initialState, {
        providers: existingProviders,
        routes: existingRoutes,
    });

    const store = configureStore(state);

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
