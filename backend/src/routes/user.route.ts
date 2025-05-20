import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";
import { authMiddleware } from "../middleware/authMiddleware.ts";

const userRouter = new Hono();

userRouter.post("/create", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/get", authMiddleware, userController.getUser);
userRouter.get("/getLoggedIn", authMiddleware, userController.getUserLoggedIn);
userRouter.get("/getAll", userController.getAllUser);
userRouter.get("/requests", authMiddleware, userController.getAllRequestFromUser);

export { userRouter };