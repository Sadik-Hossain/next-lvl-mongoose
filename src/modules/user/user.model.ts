import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethod, UserModel } from "./user.interface";

//* for instance method
// type UserModel = Model<IUser, {}, IUserMethod>;

const userSchema = new Schema<IUser, UserModel, IUserMethod>({
  // const userSchema = new Schema<IUser, UserModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  name: {
    firstName: String,
    middleName: String,
    lastName: String,
  },
  dateOfBirth: { type: String },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
});

//* instance method
//? name in quotation and fn name has to be same
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

//* static method
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const users = await this.find({ role: "admin" });

  return users;
  // return 42;
});

const User = model<IUser, UserModel>("User", userSchema);
export default User;

// to use instance method we have to create instance of class
