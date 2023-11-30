import express from "express";
import cors from "cors";
import cartRouter from "./src/features/course.router.js";
import userRouter from "./src/user/user.router.js";

const server = express();

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

server.use(cors());
server.use(express.json());

//for all course routes
server.use("/api/course", cartRouter);
//for all user routes
server.use("/api/user", userRouter);

server.listen(3100, () => {
  console.log("server listening on 3100");
});
