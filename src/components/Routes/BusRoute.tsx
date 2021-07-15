import { dir } from "console";
import { getegid } from "process";
import * as React from 'react';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Providers, Routes } from "../../api/BusRouteService";
import { getAllDirections, getAllStops } from "../../store/actions/routeActions";
import { InitialState } from "../../store/reducers/initialState";
import { Directions } from "../../store/reducers/routesReducer";
import BusStops from "./BusStops";


interface BusRouteProps  {
    providers: Providers[],
    routes: Routes[]
}

const BusRoute = ({ providers, routes }: BusRouteProps) => {

    const [selectedRouteId, setSelectedRoute] = useState("");
    const [directions, setDirections] = useState<Directions[]>();
    const [selectedStops, setSelectedStops ] = useState();

    const getDirections = async (routeId: string) => {
        await getAllDirections(routeId).then(d => setDirections(d));
        setSelectedRoute(routeId);
        if(directions) {
          const directionSelect = document.getElementById('directions') as HTMLSelectElement;
          const directionId = directionSelect.value;

          await getAllStops(routeId, directionId).then(s => setSelectedStops(s));
        }

    };

    const getStops = async (directionId: string) => {
      await getAllStops(selectedRouteId, directionId).then(s => setSelectedStops(s));
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
      {/* <p onClick={}>Previous Page</p> */}
      <Link to="/">Home</Link>
      <h1 style={{color: "white"}}>Bus Route</h1>
    {/* <label htmlFor="provider">Provider</label>
      <select name="provider">
        <option></option>
          {providers.map((p) => <option key={p.agency_id}>{p.agency_name}</option>)}
      </select> */}
      <label htmlFor="routes">Routes</label>
      <select name="routes" onChange={e => getDirections(e.target.value)}>
        <option></option>
          {routes.map((r) => <option key={r.route_id} value={r.route_id}>{r.route_label}</option>)}
      </select>

      {selectedRouteId && directions && (
        <>
        <label htmlFor="directions">Directions</label>

        <select name="directions" id="directions" onChange={e => getStops(e.target.value)}>
          <option></option>
          {directions?.map((d) => <option key={d.direction_id} value={d.direction_id}>{d.direction_name}</option>)}
        </select>
      </>
      )}

      {selectedStops  && <BusStops stops={selectedStops}/>}
    </div>
        
    </>
  );
};
export const mapDispatchToProps = {};
export const mapStateToProps = ({providers, routes}: InitialState) => ({
    providers,
    routes
});
export default connect(mapStateToProps, mapDispatchToProps)(BusRoute);