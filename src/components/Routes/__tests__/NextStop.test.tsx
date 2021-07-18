import React from "react";
import { render } from "@testing-library/react";
import NextStop from "../NextStop";

describe("Next departure tests", () => {
    it("Render component with stop information", () => {
        const mockStopInfo = {
            stops: [
                {
                    stop_id: 2,
                    lattitude: 44.44444,
                    longitude: -32.33333,
                    description: "Cool Stop",
                },
            ],
            alerts: [
                {
                    stop_closed: false,
                    alert_text: "test",
                },
            ],
            departures: [
                {
                    actual: true,
                    trip_id: "2",
                    stop_id: 2,
                    departure_text: "4 Minutes",
                    description: "Cool Bus Stop",
                    gate: "3",
                    route_id: "3",
                    route_short_name: "short route",
                    direction_id: 4,
                    direction_text: "Northwest",
                    terminal: "Terminal 1",
                    schedule_relationship: "test",
                },
            ],
        };
        const { getByText } = renderComponent({ stopInfo: mockStopInfo });

        const infoText = getByText(
            "Next departure from Cool Stop is 4 Minutes"
        );

        expect(infoText).toBeTruthy();
    });

    it("render info statement when no curent stops", () => {
        const mockNoStopInfo = {
            stops: [{}],
            alerts: [{}],
            departures: [],
        };

        renderComponent({ stopInfo: mockNoStopInfo });

        const infoText = document.getElementById("noStopText");
        expect(infoText).toBeTruthy();
    });
});

const renderComponent = (props: any = {}) => {
    return render(<NextStop {...props} />);
};
