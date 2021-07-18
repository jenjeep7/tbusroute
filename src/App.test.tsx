import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders get routes link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Click Here/i);
    expect(linkElement).toBeInTheDocument();

    linkElement.click();
});
