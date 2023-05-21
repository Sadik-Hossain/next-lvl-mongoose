import { IUser } from "./user.interface";
import User from "./user.model";

export const getUserFromDB = async (): Promise<IUser[]> => {
  //* returns array of obj, so the return type will be Promise<IUser[]>
  const result = await User.find();
  return result;
};

export const createUserToDB = async (): Promise<IUser> => {
  const newUser = new User({
    id: "1",
    role: "student",
    password: "12",
    name: {
      firstName: "a",
      middleName: "b",
      lastName: "c",
    },
    gender: "male",
    contactNo: "111",
    emergencyContactNo: "111",
    presentAddress: "zxXxX",
    permanentAddress: "zxXxX",
  });
  const result = await newUser.save();
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
