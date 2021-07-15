import * as React from 'react';
import { StopInfo, Stops } from "../../store/actions/routeActions";
import NextStop from "./NextStop";

export interface BusStopsProps {
    stops?: Stops[],
    onClick: (s: string) => void;
    stopInfo?: StopInfo
};

const BusStops = ({
    stops,
    onClick,
    stopInfo
}: BusStopsProps) => {

    return (
        <>
        {stopInfo&&  <NextStop stopInfo={stopInfo} />}
        <li id="myRoutes">
            {stops?.map((s) => (            
                <ul key={s.place_code} onClick={() => onClick(s.place_code)}><span>{s.description}</span></ul>
            ))}
        </li>
        </>
    )
}

export default BusStops;
