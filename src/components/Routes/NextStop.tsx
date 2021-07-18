import * as React from 'react';
import { StopInfo } from "../../store/actions/routeActions";


export interface NextStopProps {
    stopInfo?: StopInfo
};

const NextStop = ({
    stopInfo
}: NextStopProps) => {

    //create function to loop through departure text to display minutes, due and a time better.
    const getInfoText = (text: string) => {
        if(text.includes("Due")) {
            return "Arriving Now"    
        } else if (text.includes("Min")) {
            return `in ${text}`;
        } else {
            return `at ${text}`;
        }
    };

    return (
        <>
            {stopInfo && (stopInfo.departures.length > 0) && (
            <div style={{marginTop: '24px'}}>
                <span id="departureText">Next Departure From {stopInfo?.stops[0].description} is {getInfoText(stopInfo?.departures[0].departure_text)}</span>
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