import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouters";
import video from "./routers/videoRouter";
import user from "./routers/userRouter";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use("/", global);
app.use("/videos", video);
app.use("/users", user);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
