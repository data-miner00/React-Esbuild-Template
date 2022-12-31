import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ThemeSwitcher from "../ThemeSwitcher";

class ThemeSwitcherSteps {
  public whenIRenderComponent(): ThemeSwitcherSteps {
    render(<ThemeSwitcher />);
    return this;
  }

  public whenIClickOnElement(testid: string): ThemeSwitcherSteps {
    fireEvent(
      screen.getByTestId(testid),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    return this;
  }

  public thenIExpectElementToExist(testid: string): ThemeSwitcherSteps {
    const element = screen.getByTestId(testid);
    expect(element).toBeInTheDocument();
    return this;
  }

  public thenIExpectElementToNotExist(testid: string): ThemeSwitcherSteps {
    const element = screen.queryByTestId(testid);
    expect(element).not.toBeInTheDocument();
    return this;
  }
}

export default ThemeSwitcherSteps;
