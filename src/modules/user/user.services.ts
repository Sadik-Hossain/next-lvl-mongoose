import { IUser, UserModel } from "./user.interface";
import User from "./user.model";

export const getUserFromDB = async (): Promise<IUser[]> => {
  //* returns array of obj, so the return type will be Promise<IUser[]>
  const result = await User.find();
  return result;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const newUser = new User(payload);
  const result = await newUser.save();
  //  console.log(newUser.fullName()); // instance method

  return result;
};
export const getUserByIDfromDB = async (
  payload: string
): Promise<IUser | null> => {
  //   const result = await User.findOne({ id: payload });
  //* field filtering
  //   const result = await User.findOne({id:payload},{name:1})
  const result = await User.findOne(
    { id: payload },
    { name: 1, permanentAddress: 1 }
  );

  return result;
};

export const getAdminFromDB = async () => {
  const result = await User.getAdminUsers();
  console.log(result);
  return result;
};
getAdminFromDB();
