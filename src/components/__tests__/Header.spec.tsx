import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

it("renders the content properly", () => {
  render(<Header />);
  const helloElement = screen.getByText(/logod/i);
  expect(helloElement).toBeInTheDocument();
});
