import { Router } from "express";
import { CreateUser, getUser } from "./user.controller";

const route = Router();
route.get("/", getUser);
route.post("/create-user", CreateUser);

export default route;
