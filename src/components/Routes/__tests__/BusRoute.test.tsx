import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import { BusRoute }from '../BusRoute';
//import routeActions from "../../../store/actions/routeActions";

const mockDirections = [
  {
    direction_id: 2,
    direction_name: "West"
  },
  {
    direction_id: 3,
    direction_name: "North"
  }
];

const mockBusStops = jest.fn((props: any) => <div />);
jest.mock("../BusStops", () => (props: any) => mockBusStops(props));

// const mockGetdirections = jest.fn((props: any) => jest.fn());
// jest.spyOn(routeActions, 'getAllDirections').mockImplementation(mockGetdirections);

jest.mock("../../../store/actions/routeActions", () => ({
  getAllDirections: jest.fn().mockImplementation(() => async () => mockDirections)
}))



const mockRoutes = [
  {
    route_id: "1",
    agency_id: "1",
    route_label: "Cool Stadium"
  },
  {
    route_id: "2",
    agency_id: "2",
    route_label: "The Mall"
  }
];




describe('renders App Container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("Render component without issues", () => {
    renderComponent({routes: mockRoutes}); 
  });

  it("Routes dropdown is populated on pageload", async  () => {

    const { getByText } = renderComponent({routes: mockRoutes}); 

    const routelabel = getByText('Routes');
    expect(routelabel).toBeInTheDocument();

    const options = document.getElementsByTagName('option');
    expect(options.length).toBe(3);

    
    
  });

  it("Directions get populated when route is selected", async () => {

    renderComponent({routes: mockRoutes});

    const routeSelect = document.getElementById('routeSelect');
    await fireEvent.change(routeSelect, { target: {value: "2"}});


    const directionSelect = document.getElementById('directions') as HTMLElement;

  })
});


  
const renderComponent = (props: any = {}) => {
    return render(<BusRoute {...props} />);
};



//To Test
//When page loads is route dropdown populated?
//when route is selected does directions show and populate?
//If Directions shows is get stops called?
//If user changes route what happens