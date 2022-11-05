import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "../Header";
import { MemoryRouter } from "react-router-dom";

it("renders the content properly", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const helloElement = screen.getByText(/logod/i);
  expect(helloElement).toBeInTheDocument();
});
