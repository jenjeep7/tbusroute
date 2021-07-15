import { Directions, Providers, Routes } from "../reducers/routesReducer";
import { ALL_PROVIDERS } from "./actionTypes";



export interface ProviderAction {
	type: string;
    providers: Providers[];
};

export interface RoutesAction {
	type: string;
    routes: Routes[];
};

export interface DirectionAction {
    type: string;
    directions: Directions[];
};

export interface Stops {
   place_code: string,
   description: string
}
export const loadProviders = (providers: Providers[]) => ({ type: ALL_PROVIDERS, providers });


export const getProviders = async () =>  {

    try {
        let response = await fetch('https://svc.metrotransit.org/nextripv2/agencies');
        let data = await response.json();

        return data;       
    } 
    catch(error) {
        throw error;
    };
};

export const getRoutes = async () =>  {

    try {
        let response = await fetch('https://svc.metrotransit.org/nextripv2/routes');
        let data = await response.json();

        return data;       
    } 
    catch(error) {
        throw error;
    };
};
export const getAllDirections = async (routeId: string) =>  {

    try {
        let response = await fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`);
        let data = await response.json();

        return data;       
    } 
    catch(error) {
        throw error;
    };
};
export const getAllStops = async (routeId: string, direction: string) =>  {

    try {
        let response = await fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${direction}`);
        let data = await response.json();

        return data;       
    } 
    catch(error) {
        throw error;
    };
};
