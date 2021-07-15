import * as React from 'react';
import { StopInfo, Stops } from "../../store/actions/routeActions";


export interface NextStopProps {
    stopInfo?: StopInfo
};

const NextStop = ({
    stopInfo
}: NextStopProps) => {

console.log(stopInfo)
    return (
        <>
       <span id="departureText">Next departure from {stopInfo?.stops[0].description} {stopInfo?.departures[0].description} is in {stopInfo?.departures[0].departure_text} minutes</span>
        </>
    )
}

export default NextStop;