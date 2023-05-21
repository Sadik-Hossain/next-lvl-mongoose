import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

//* static method interface (when no instance method is here)
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }

//* instance method interface
export interface IUserMethod {
  fullName(): string;
}

//* when static and instance both needed
export interface UserModel extends Model<IUser, {}, IUserMethod> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethod>>;
}
