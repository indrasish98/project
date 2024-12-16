import { Router } from "express";
import {  getAmenityByProjectId , updateAmenity } from "../controller/controller.amenity.js";

const amenityRoute = Router();

amenityRoute.get('/get/:projectId', getAmenityByProjectId);
amenityRoute.patch('/update/:projectId', updateAmenity);

export default amenityRoute;
