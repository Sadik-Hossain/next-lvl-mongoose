import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./modules/user/user.route";

const app: Application = express();

// global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});
export default app;
