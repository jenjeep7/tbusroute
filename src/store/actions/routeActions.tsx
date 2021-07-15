import { Providers, Routes } from "../reducers/routesReducer";
import { ALL_PROVIDERS } from "./actionTypes";



export interface ProviderAction {
	type: string;
    providers: Providers[];
};

export interface RoutesAction {
	type: string;
    routes: Routes[];
};
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
export const getStops = async (routeId: string) =>  {

    try {
        let response = await fetch('https://svc.metrotransit.org/nextripv2/routes/' + routeId);
        let data = await response.json();

        return data;       
    } 
    catch(error) {
        throw error;
    };
};
