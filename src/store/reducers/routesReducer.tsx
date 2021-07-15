import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { ProviderAction } from "../actions/routeActions";


export interface Providers {
	agency_id: number,
	agency_name: string
};



export default function providerReducer(
	state: Providers[] = initialState.providers,
	action: ProviderAction
): Providers[] {
	switch (action.type) {
		case types.ALL_PPROVIDERS:
			return [...action.providers];
		default:
			return state;
	}
}
