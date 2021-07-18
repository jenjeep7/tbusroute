import { createStore } from "redux";
import rootReducer from "./index";

export default function configureStore(initialState?: any) {
    return createStore(rootReducer, initialState);
}
