export interface AppUserInterface {
  name: string;
  age: number;
  mail: string;
  tel: number;
}

export const Person = (
  name: string,
  age: number,
  mail: string,
  tel: string
) => {
  return {
    name: name,
    age: age,
    mail: mail,
    tel: tel
  };
};
