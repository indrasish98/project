import { Router } from "express";
import { createPlanName,
         deleteParticularPlanName,
         fetchPlanNameForParticularProject,
         updatePlanName
         } from "../controller/controller.planName.js";
import { planNameValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const planNameRouter = Router();

planNameRouter.post('/create/:projectId',planNameValidation,createPlanName);
planNameRouter.get('/:projectId',fetchPlanNameForParticularProject);
planNameRouter.delete('/delete/:planNameId',deleteParticularPlanName);
planNameRouter.put('/update/:planNameId',planNameValidation,updatePlanName);

export default planNameRouter;