import * as React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Providers, Routes } from "../../api/BusRouteService";
import { InitialState } from "../../store/reducers/initialState";
import { routesReducer } from "../../store/reducers/routesReducer";


interface BusRouteProps  {
    providers: Providers[],
    routes: Routes[]
}

const BusRoute = ({ providers, routes }: BusRouteProps) => {


  return (
      <>
    <div>
      {/* <p onClick={}>Previous Page</p> */}
      <Link to="/">Home</Link>
      <h1>Bus Route</h1>
    <label htmlFor="provider">Provider</label>
      <select name="provider">
          {providers.map((p) => <option key={p.agency_id}>{p.agency_name}</option>)}
      </select>
      <label htmlFor="routes">Routes</label>
      <select name="routes">
          {routes.map((r) => <option key={r.agency_id}>{r.route_label}</option>)}
      </select>
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