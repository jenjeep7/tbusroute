import { combineReducers } from "redux";
import { providerReducer, routesReducer } from "./routesReducer";

const appReducer = combineReducers({
    providers: providerReducer,
    routes: routesReducer,
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;
