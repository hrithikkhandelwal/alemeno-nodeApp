import express from "express";
import * as userController from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/", userController.verifyUser);

export default userRouter;
