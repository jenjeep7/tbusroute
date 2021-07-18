import * as React from 'react';
import { StopInfo } from "../../store/actions/routeActions";


export interface NextStopProps {
    stopInfo?: StopInfo
};

const NextStop = ({
    stopInfo
}: NextStopProps) => {

    return (
        <>
            {stopInfo && (stopInfo.departures.length > 0) && (
            <div style={{marginTop: '24px'}}>
                <span id="departureText">Next departure from {stopInfo?.stops[0].description} is {stopInfo?.departures[0].departure_text}</span>
            </div>
            )}

        {stopInfo && (stopInfo.departures.length < 1) && (
            <div style={{color: 'red'}}>
                <p id="noStopText">There are no current stops on this route.  Please select another route.</p>
            </div>
        )}
        </> 

    );
};

export default NextStop;