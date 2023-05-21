import { Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.services";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserToDB();
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
