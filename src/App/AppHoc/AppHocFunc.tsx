import { IsData } from "./CheckUserDataFunc/IsData";
import { NoData } from "./CheckUserDataFunc/noData";

export const CheckUserData = async (props: any): Promise<void> => {
  try {
    if (props.userData !== false) {
      await IsData(props);
    } else {
      await NoData(props);
    }
  } catch (error) {
    console.log(error);
  }
};
