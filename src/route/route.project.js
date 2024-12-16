import { Router } from "express";
import { createProject, updateproject } from "../controller/controller.project.js";

const projectRouter = Router();

projectRouter.post('/add',createProject);
projectRouter.patch('/update/:projectId',updateproject);

export default projectRouter;



