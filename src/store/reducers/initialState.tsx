import { Providers, Routes } from "../../api/BusRouteService";

export interface InitialState {
    providers: Providers[];
    routes: Routes[];
}

export default {
    providers: [],
    routes: [],
};
