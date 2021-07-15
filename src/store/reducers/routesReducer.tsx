import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { ProviderAction, RoutesAction } from "../actions/routeActions";


export interface Providers {
	agency_id: number,
	agency_name: string
};

export interface Routes {
    route_id: string,
    agency_id: number,
    route_label: string
};

export interface Directions {
	direction_id: number,
	direction_name: string
};



export  function providerReducer(
	state: Providers[] = initialState.providers,
	action: ProviderAction
): Providers[] {
	switch (action.type) {
		case types.ALL_PROVIDERS:
			return [...action.providers];
		default:
			return state;
	}
};

export  function routesReducer(
	state: Routes[] = initialState.routes,
	action: RoutesAction
): Routes[] {
	switch (action.type) {
		case types.ALL_ROUTES:
			return [...action.routes];
		default:
			return state;
	}
}
