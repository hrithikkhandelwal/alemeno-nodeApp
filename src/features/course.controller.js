import * as courseModel from "./course.model.js";

export function getData(req, res) {
  const courses = courseModel.getAll();
  res.send(courses);
}

export function getCoursesWithUserId(req, res) {
  const id = Number(req.params.id);
  const courses = courseModel.getCoursesOfUser(id);
  res.send(courses);
}

export function UpdateLikesWithCourseId(req, res) {
  const courseId = req.params.courseId;
  const courses = courseModel.updateLikes(courseId);
  res.send(courses);
}
