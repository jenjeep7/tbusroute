import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Providers, Routes } from "../../api/BusRouteService";
import {
    getAllDirections,
    getAllStops,
    getStopInformation,
    StopInfo,
} from "../../store/actions/routeActions";
import { InitialState } from "../../store/reducers/initialState";
import { Directions } from "../../store/reducers/routesReducer";
import ToolBar from "../Toolbar";
import BusStops from "./BusStops";
import NextStop from "./NextStop";
import "./Routes.scss";

interface BusRouteProps {
    providers: Providers[];
    routes: Routes[];
}

const BusRoute = ({ routes }: BusRouteProps) => {
    const [selectedRouteId, setSelectedRoute] = useState("");
    const [directions, setDirections] = useState<Directions[]>();
    const [selectedStops, setSelectedStops] = useState();
    const [stopInfo, setStopInfo] = useState<StopInfo>();

    const onSelectRoute = async (routeId: string) => {
        if (routeId) {
            setSelectedRoute(routeId);
            await getAllDirections(routeId)
                .then((d) => setDirections(d))
                .catch((e) => console.log(e));

            //if user changes routes clear out stops and reset directions dropdonwn

            setSelectedStops(null);
            setStopInfo(null);

            const directionSelect = document.getElementById(
                "directions"
            ) as HTMLSelectElement;
            directionSelect.value = "";
        } else {
            //handle if the user deselects any routes
            setDirections(null);
            setSelectedStops(null);
            setStopInfo(null);
        }
    };

    const getStops = async (directionId: string) => {
        await getAllStops(selectedRouteId, directionId).then((s) =>
            setSelectedStops(s)
        );
        setStopInfo(null);
    };

    const getStopDetails = async (stopId: string) => {
        const directionSelect = document.getElementById(
            "directions"
        ) as HTMLSelectElement;
        const directionId = directionSelect.value;
        await getStopInformation(selectedRouteId, directionId, stopId).then(
            (i) => {
                setStopInfo(i);
            }
        );
    };

    // useEffect(() => {
    //   getDirections(selectedRouteId);
    //   return () => {
    //     cleanup();
    //   }
    // }, [selectedRouteId])

    return (
        <>
            <div>
                <ToolBar />

                {/* <label htmlFor="provider">Provider</label>
        <select name="provider">
          <option></option>
            {providers.map((p) => <option key={p.agency_id}>{p.agency_name}</option>)}
        </select> */}

                <div id="routeContainer">
                    <div className="form-group dropdown" id="routeGroup">
                        <label htmlFor="routeSelect">Routes</label>
                        <select
                            className="dropdown-select"
                            id="routeSelect"
                            name="routes"
                            style={{marginLeft: "26px"}}
                            onChange={(e) => onSelectRoute(e.target.value)}
                        >
                            <option></option>
                            {routes.map((r) => (
                                <option key={r.route_id} value={r.route_id}>
                                    {r.route_label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedRouteId && directions && (
                        <div className="form-group dropdown">
                            <label htmlFor="directions">Direction</label>

                            <select
                                className={"dropdown-select"}
                                name="directions"
                                id="directions"
                                onChange={(e) => getStops(e.target.value)}
                            >
                                <option></option>
                                {directions.map((d) => (
                                    <option
                                        key={d.direction_id}
                                        value={d.direction_id}
                                    >
                                        {d.direction_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {stopInfo && <NextStop stopInfo={stopInfo} />}
                </div>
                {selectedStops && (
                    <BusStops
                        stops={selectedStops}
                        onClick={(stopID) => getStopDetails(stopID)}
                    />
                )}
            </div>
        </>
    );
};

export const mapDispatchToProps = {};
export const mapStateToProps = ({ providers, routes }: InitialState) => ({
    providers,
    routes,
});
export default connect(mapStateToProps, mapDispatchToProps)(BusRoute);

//export unconnected for testing
export { BusRoute };
