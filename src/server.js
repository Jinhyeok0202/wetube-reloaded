import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import video from "./routers/videoRouter";
import user from "./routers/userRouter";

const app = express();
const loggerMiddleware = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/videos", video);
app.use("/users", user);

export default app;
