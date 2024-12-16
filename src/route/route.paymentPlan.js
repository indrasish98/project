import { Router } from "express";
import { addPaymentPlan, deletePaymentPlan, getPaymentPlanByProjectId, updatePaymentPlan } from "../controller/controller.paymentPlan.js";

const paymentPlanRoute = Router();

paymentPlanRoute.post('/add/:projectId',addPaymentPlan);
paymentPlanRoute.get('/get/:projectId',getPaymentPlanByProjectId);
paymentPlanRoute.delete('/delete/:paymentPlanId',deletePaymentPlan);
paymentPlanRoute.put('/update/:paymentPlanId',updatePaymentPlan);


export default paymentPlanRoute;