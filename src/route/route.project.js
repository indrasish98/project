import { Router } from "express";
import { createProject, updateproject } from "../controller/controller.project.js";
import { projectCreationValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";


const projectRouter = Router();

projectRouter.post('/create',projectCreationValidation,createProject);
projectRouter.patch('/update/:projectId',updateproject);

export default projectRouter;



