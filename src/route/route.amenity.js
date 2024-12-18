import { Router } from "express";
import {  getAmenityByProjectId , updateAmenity } from "../controller/controller.amenity.js";
import { amenityValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";
const amenityRoute = Router();

amenityRoute.get('/get/:projectId', getAmenityByProjectId);
amenityRoute.patch('/update/:projectId',amenityValidation, updateAmenity);

export default amenityRoute;
