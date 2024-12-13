import { Router } from "express";
import { createProject } from "../controller/controller.project.js";

const projectRouter = Router();

projectRouter.post('/add',createProject);

export default projectRouter;



