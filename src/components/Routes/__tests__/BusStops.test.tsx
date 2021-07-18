import React from "react";
import { render } from "@testing-library/react";
import BusStops from "../BusStops";

const mockOnClick = jest.fn();

test("renders App Container", () => {
    renderComponent({ onClick: mockOnClick });
});

const renderComponent = (props: any = {}) => {
    return render(<BusStops {...props} />);
};
