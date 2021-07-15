

export interface IBusRouteService {
    getRoute: () => void;
    // getProviders: () => (dispatch: any) => Providers[];
};

export interface Providers {
    agency_id: number,
    agency_name: string
}

const getRoute = async () => {

    
    
};

// export const getProviders = () => async (dispatch: any) => {
//     const response = await window.fetch('https://svc.metrotransit.org/nextripv2/agencies');
//     const {data, errors} = await response.json()

//     if(response.ok) {
        
//         return data;
//     } else {
//         // return Promise.reject(errors);
//     }
// }

const BusRouteService: IBusRouteService = {
    getRoute,
    // getProviders
}

export default BusRouteService;