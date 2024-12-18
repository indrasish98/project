import { Router } from "express";
import { 
    addPaymentPlan,
    deletePaymentPlan,
    getPaymentPlanByProjectId,
    updatePaymentPlan 
} from "../controller/controller.paymentPlan.js";
import { paymentPlanValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const paymentPlanRoute = Router();

paymentPlanRoute.post('/add/:planNameId',paymentPlanValidation,addPaymentPlan);
paymentPlanRoute.get('/get/:planNameId',getPaymentPlanByProjectId);
paymentPlanRoute.delete('/delete/:paymentPlanId',deletePaymentPlan);
paymentPlanRoute.put('/update/:paymentPlanId',paymentPlanValidation,updatePaymentPlan);


export default paymentPlanRoute;