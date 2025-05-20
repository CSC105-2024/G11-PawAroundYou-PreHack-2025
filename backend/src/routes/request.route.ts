import { Hono } from "hono";
import * as requestController from "../controllers/request.controller.ts";
import { authMiddleware } from "../middleware/authMiddleware.ts";

const requestRouter = new Hono();

requestRouter.post("/create", authMiddleware, requestController.createRequest);
requestRouter.patch("/edit", requestController.editRequest);
requestRouter.get("/get", requestController.getRequest);
requestRouter.get("/getAll", requestController.getAllRequest);
requestRouter.delete("/delete", requestController.deleteRequest);

export { requestRouter };
