import * as React from 'react';
import { StopInfo } from "../../store/actions/routeActions";


export interface NextStopProps {
    stopInfo?: StopInfo
};

const NextStop = ({
    stopInfo
}: NextStopProps) => {

    return (
        <div style={{marginTop: '24px'}}>
            <span id="departureText">Next departure from {stopInfo?.stops[0].description} is {stopInfo?.departures[0].departure_text}</span>
        </div>
    )
}

export default NextStop;