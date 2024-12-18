import { Router } from "express";
import { 
    addRoom,
    deleteRoom, 
    getAllRoomByProjectId, 
    updateRoom 
} from "../controller/controller.roomConfiguration.js";
import { roomConfigurationValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const roomConfigurationRoute = Router();

roomConfigurationRoute.post('/add/:projectId',roomConfigurationValidation,addRoom);
roomConfigurationRoute.get('/:projectId',getAllRoomByProjectId);
roomConfigurationRoute.delete('/delete/:roomId',deleteRoom);
roomConfigurationRoute.put('/update/:roomId',roomConfigurationValidation,updateRoom);


export default roomConfigurationRoute;