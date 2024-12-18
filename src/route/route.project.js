import { Router } from "express";
import { createProject, fetchProjectByProjectId, updateproject } from "../controller/controller.project.js";
import { projectCreationValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";


const projectRouter = Router();

projectRouter.post('/create',projectCreationValidation,createProject);
projectRouter.patch('/update/:projectId',updateproject);
projectRouter.get('/:projectId',fetchProjectByProjectId);

export default projectRouter;



