import { render, screen } from "@testing-library/react";

import AnimatedSnackbar, { Props } from "../Snackbar";
import BaseSteps from "./Base.steps";

class SnackbarSteps extends BaseSteps<SnackbarSteps, Props> {
    public whenIRenderComponent(): SnackbarSteps {
        render(<AnimatedSnackbar {...this.props} />);

        return this;
    }

    public thenIExpectIconOnlyExist(existIconTestId: string): SnackbarSteps {
        const iconTestIds = [
            "snackbar-icon-info",
            "snackbar-icon-success",
            "snackbar-icon-warn",
            "snackbar-icon-error",
            "snackbar-icon-empty",
        ];

        if (!iconTestIds.includes(existIconTestId)) {
            throw new Error("The provided icon test id is invalid.");
        }

        const element = screen.getByTestId(existIconTestId);
        expect(element).toBeInTheDocument();

        iconTestIds
            .filter((icon) => icon !== existIconTestId)
            .forEach((icon) => {
                const element = screen.queryByTestId(icon);
                expect(element).not.toBeInTheDocument();
            });

        return this;
    }

    public getSteps(): SnackbarSteps {
        return this;
    }
}

export default SnackbarSteps;
