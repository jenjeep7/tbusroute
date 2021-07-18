import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import BusRoute from "./components/Routes/BusRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={AppContainer} />
                <Route path="/busroute" component={BusRoute} />
                {/* Not Found */}
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
