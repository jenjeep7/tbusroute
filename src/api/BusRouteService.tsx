export interface IBusRouteService {
    getRoute: () => void;
    // getProviders: () => (dispatch: any) => Providers[];
}

export interface Providers {
    agency_id: number;
    agency_name: string;
}

export interface Routes {
    route_id: string;
    agency_id: number;
    route_label: string;
}

const getRoute = async () => {};

const BusRouteService: IBusRouteService = {
    getRoute,
    // getProviders
};

export default BusRouteService;
