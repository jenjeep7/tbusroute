import { combineReducers } from "redux";
import providerReducer from "./routesReducer";
import initialState from "./initialState";

const appReducer = combineReducers({
    providers: providerReducer
})


const rootReducer = (state: any, action: any) => {

	return appReducer(state, action);
};

export default rootReducer;
