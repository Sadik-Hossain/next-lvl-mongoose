import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
