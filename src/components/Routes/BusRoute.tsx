import * as React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Providers } from "../../api/BusRouteService";
import { InitialState } from "../../store/reducers/initialState";


interface BusRouteProps  {
    providers: Providers[]
}

const BusRoute = ({ providers }: BusRouteProps) => {


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
    </div>
        
    </>
  );
};
export const mapDispatchToProps = {};
export const mapStateToProps = ({providers}: InitialState) => ({
    providers
});
export default connect(mapStateToProps, mapDispatchToProps)(BusRoute);