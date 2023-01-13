import SnackbarSteps from "../__steps__/Snackbar.steps";
import { Props, SnackbarType } from "../Snackbar";

describe("Snackbar component", () => {
  let steps: SnackbarSteps;
  let propsDataBuilder: SnackbarPropsDataBuilder;

  const snackbarTestId = "snackbar";
  const messageTestId = "snackbar-message";

  beforeEach(() => {
    steps = new SnackbarSteps();
    propsDataBuilder = new SnackbarPropsDataBuilder();
  });

  it("should render when show is true", () => {
    const props = propsDataBuilder.withShow(true).build();

    steps
      .givenIHaveTheFollowingProps(props)
      .whenIRenderComponent()
      .thenIExpectElementToExist(snackbarTestId)
      .thenIExpectElementToHaveText(messageTestId, props.message);
  });

  it("should hide when show is false", () => {
    const props = propsDataBuilder.withShow(false).build();

    steps
      .givenIHaveTheFollowingProps(props)
      .whenIRenderComponent()
      .thenIExpectElementToNotExist(snackbarTestId);
  });

  describe("should render different color and icon with different variants", () => {
    const testScenarios: Array<{ type: SnackbarType; iconId: string }> = [
      { type: "info", iconId: "snackbar-icon-info" },
      { type: "success", iconId: "snackbar-icon-success" },
      { type: "warn", iconId: "snackbar-icon-warn" },
      { type: "error", iconId: "snackbar-icon-error" },
    ];

    testScenarios.forEach((scenario) => {
      it(`should render icon ${scenario.iconId} for type ${scenario.type}`, () => {
        const props = propsDataBuilder.withType(scenario.type);

        steps
          .givenIHaveTheFollowingProps(props)
          .whenIRenderComponent()
          .thenIExpectIconOnlyExist(scenario.iconId);
      });
    });
  });
});

class SnackbarPropsDataBuilder {
  public message: string = "This is a default snackbar message";
  public type: SnackbarType = "info";
  public show: boolean = true;

  public withMessage(value: string): SnackbarPropsDataBuilder {
    this.message = value;
    return this;
  }

  public withType(value: SnackbarType): SnackbarPropsDataBuilder {
    this.type = value;
    return this;
  }

  public withShow(value: boolean): SnackbarPropsDataBuilder {
    this.show = value;
    return this;
  }

  public build(): Props {
    return {
      message: this.message,
      type: this.type,
      show: this.show,
    };
  }
}
