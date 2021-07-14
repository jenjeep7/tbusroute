import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps {}

const BusRoute = ({ history }: Props) => {
  return (
    <div>
      <p onClick={history.goBack}>Previous Page</p>
      <Link to="/">Top</Link>
      <h1>Bus Route</h1>
    </div>
  );
};

export default BusRoute;