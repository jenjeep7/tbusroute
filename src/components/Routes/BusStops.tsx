import * as React from 'react';
import { Stops } from "../../store/actions/routeActions";

export interface BusStopsProps {
    stops?: Stops[]
};

const BusStops = ({
    stops
}: BusStopsProps) => {
    return (
        <>
        <div id="myRoutes">
            {stops?.map((s) => <p key={s.place_code}>{s.description}</p>)}
        </div>
        </>
    )
}

export default BusStops;
