import { Router } from "express";
import { CreateUser, getUser, getUserById } from "./user.controller";

const route = Router();
route.get("/", getUser);
route.post("/create-user", CreateUser);
route.get("/:id", getUserById);

export default route;
