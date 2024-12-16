import { Router } from "express";
import { 
    addRoom,
    deleteRoom, 
    getAllRoomByProjectId, 
    updateRoom 
} from "../controller/controller.paymentPlan.js";

const paymentPlanRoute = Router();

paymentPlanRoute.post('/add/:projectId',addRoom);
paymentPlanRoute.get('/get/:projectId',getAllRoomByProjectId);
paymentPlanRoute.delete('/delete/:roomId',deleteRoom);
paymentPlanRoute.put('/update/:roomId',updateRoom);


export default paymentPlanRoute;