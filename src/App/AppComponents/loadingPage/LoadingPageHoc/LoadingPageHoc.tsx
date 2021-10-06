import {
  compose,
  withReducer,
  withHandlers,
  onlyUpdateForKeys,
  lifecycle
} from "recompose";

let actionReducer = (actionLoad: string, action: { type: string }) => {
  switch (action.type) {
    case "IsSpinning":
      return (actionLoad = "isSpinning");

    case "IsSignIn":
      return (actionLoad = "isSignIn");

    case "IsSignUp":
      return (actionLoad = "isSignUp");

    default:
      return (actionLoad = "isSpinning");
  }
};

let addReducer = withReducer("actionLoad", "disp", actionReducer, "isSpinning");

let addLoadHandlers = withHandlers({
  IsSpinning: ({ disp }) => () => disp({ type: "IsSpinning" }),
  IsSignIn: ({ disp }) => () => disp({ type: "IsSignIn" }),
  IsSignUp: ({ disp }) => () => disp({ type: "IsSignUp" })
});

let addLifecycle = lifecycle({
  componentDidMount() {
    const { IsSignIn } = this.props;
    setTimeout(() => {
      IsSignIn();
    }, 2000);
  }
});

let addUpdater = onlyUpdateForKeys(["actionLoad", "userData"]);

export default compose(addReducer, addLoadHandlers, addLifecycle, addUpdater);
