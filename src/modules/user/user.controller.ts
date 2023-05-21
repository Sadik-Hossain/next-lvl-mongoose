import { Request, Response } from "express";
import {
  createUserToDB,
  getUserByIDfromDB,
  getUserFromDB,
} from "./user.services";
import { IUser } from "./user.interface";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const payload: IUser = req.body;
    const user = await createUserToDB(payload);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserFromDB();
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  // const user = await getUserByIDfromDB("1");
  const { id } = req.params;
  try {
    const user = await getUserByIDfromDB(id);
    console.log(user);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
