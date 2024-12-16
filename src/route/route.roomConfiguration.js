import { Router } from "express";
import { 
    addRoom,
    deleteRoom, 
    getAllRoomByProjectId, 
    updateRoom 
} from "../controller/controller.roomConfiguration.js";

const roomConfigurationRoute = Router();

roomConfigurationRoute.post('/add/:projectId',addRoom);
roomConfigurationRoute.get('/get/:projectId',getAllRoomByProjectId);
roomConfigurationRoute.delete('/delete/:roomId',deleteRoom);
roomConfigurationRoute.put('/update/:roomId',updateRoom);


export default roomConfigurationRoute;