import * as React from "react";
import { useState } from "react";
import { Stops } from "../../store/actions/routeActions";

export interface BusStopsProps {
    stops?: Stops[];
    onClick: (s: string) => void;
}

const BusStops = ({ stops, onClick }: BusStopsProps) => {
    const [selectedStop, setSelectedStop] = useState("");

    const onClickStop = (place_code) => {
        onClick(place_code);
        setSelectedStop(place_code);
    };

    const getClassName = (code: string) => {
        if (code === selectedStop) {
            return "selectedStop";
        } else {
            return "stops";
        }
    };

    return (
        <div id="myRoutes">
            <h2 style={{margin: "0"}}>Select Stop</h2>
            <p style={{color: '#61c2fb'}}>What is your desired stop? Click a destination.</p>

            <ul className="column-list">
                {stops?.map((s) => (
                    <li
                        className={getClassName(s.place_code)}
                        key={s.place_code}
                        onClick={() => onClickStop(s.place_code)}
                    >
                        <span>{s.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusStops;
