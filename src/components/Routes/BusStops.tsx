import * as React from 'react';
import { useState } from "react";
import { Stops } from "../../store/actions/routeActions";

export interface BusStopsProps {
    stops?: Stops[],
    onClick: (s: string) => void;
};

const BusStops = ({
    stops,
    onClick,
}: BusStopsProps) => {

    const [selectedStop, setSelectedStop ] = useState("");

    const onClickStop = (place_code) => {
        onClick(place_code);
        setSelectedStop(place_code);
    };

    const getClassName = (code) => {
        if(code === selectedStop) {
            return "selectedStop"
        } else {
            return "stops"
        }
    }

    return (
        <div style={{marginLeft: "8px"}}>
            <h2>Select Stop</h2>
            <p>What is your desired stop?  Click a destination.</p>

            <li id="myRoutes">
                {stops?.map((s) => (            
                    <ul className={getClassName(s.place_code)}key={s.place_code} onClick={() => onClickStop(s.place_code)}><span>{s.description}</span></ul>
                ))}
            </li>

        </div>
    )
};


export default BusStops;
