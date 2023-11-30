import express from "express";
import * as courseController from "./course.controller.js";

const cartRouter = express.Router();

cartRouter.get("/", courseController.getData);
cartRouter.post("/:id", courseController.getCoursesWithUserId);
cartRouter.post("/likes/:courseId", courseController.UpdateLikesWithCourseId);

export default cartRouter;
