import { Router } from "express";
import { createProject, updateproject } from "../controller/controller.project.js";

const projectRouter = Router();

projectRouter.post('/create',createProject);
projectRouter.patch('/update/:projectId',updateproject);

export default projectRouter;



