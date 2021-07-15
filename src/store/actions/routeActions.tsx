import { BusRouteService } from "../../api";
import { Providers } from "../reducers/routesReducer";
import { ALL_PPROVIDERS } from "./actionTypes";



export interface ProviderAction {
	type: string;
    providers: Providers[];
};
export const loadProviders = (providers: Providers[]) => ({ type: ALL_PPROVIDERS, providers });


export const getProviders = async () =>  {

    // return fetch('https://svc.metrotransit.org/nextripv2/agencies').then(res => res.json()).then(res => {return res as Providers[]});
    try {
        // const routeProviders = await  BusRouteService.getProviders();
        let response = await fetch('https://svc.metrotransit.org/nextripv2/agencies');
        let data = await response.json();

        return data;
        

        // await dispatch(loadProviders(response))
    } 
    catch(error) {
        throw error;
    };
};
