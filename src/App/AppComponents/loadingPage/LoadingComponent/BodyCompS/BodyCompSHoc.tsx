import { withState, withHandlers, compose, onlyUpdateForKeys } from "recompose";

let addName = withState("name", "setName", "");

let addMail = withState("mail", "setMail", "");

// let addTel = withState("tel", "setTel", "");

let addHandlers = withHandlers({
  AddName: ({ setName }) => (txt: string) => setName(txt),
  // AddAge: ({ setAge }) => (txt: number) => setAge(`${txt}`),
  AddMail: ({ setMail }) => (txt: string) => setMail(txt),
  // AddTel: ({ setTel }) => (txt: string) => setTel(txt),
  AddUserData: ({ setUserData, name, mail }) => () =>
    setUserData({
      name: name,
      mail: mail
    })
});

let addUpdater = onlyUpdateForKeys(["name", "mail", "actionLoad"]);

export default compose(addName, addMail, addHandlers, addUpdater);
