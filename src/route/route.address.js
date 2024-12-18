import { Router } from "express";
import {  getAddressByProjectId, updateAddress } from "../controller/controller.address.js";
import { addressValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const addressRoute = Router();

addressRoute.get('/:projectId', getAddressByProjectId);
addressRoute.put('/update/:projectId',addressValidation,updateAddress);

export default addressRoute;
