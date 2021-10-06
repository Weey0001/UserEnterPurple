import { compose, withHandlers, withState, lifecycle } from "recompose";
import { CheckUserData } from "./AppHocFunc";

let addUserData = withState("userData", "setUserData", false);
let addHigherLoading = withState("isLoading", "setLoading", true);
let addStateSign = withState("isSign", "setSign", false);

let addHandlers = withHandlers({
  IsHigherLoading: ({ setLoading }) => (bool: boolean) => setLoading(bool),
  AddUserData: ({ setUserData }) => (data: any) => setUserData(data),
  IsSign: ({ setSign }) => (bool: boolean) => setSign(bool),
  CheckUserData: (props) => async () => await CheckUserData(props)
});

let addLifeCycle = lifecycle({
  async componentDidMount() {
    await this.props.CheckUserData();
  },
  shouldComponentUpdate() {
    return true;
  }
});

export default compose(
  addUserData,
  addHigherLoading,
  addStateSign,
  addHandlers,
  addLifeCycle
);
