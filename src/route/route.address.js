import { Router } from "express";
import {  getAddressByProjectId, updateAddress } from "../controller/controller.address.js";

const addressRoute = Router();

addressRoute.get('/get/:projectId', getAddressByProjectId);
addressRoute.put('/update/:addressId', updateAddress);

export default addressRoute;
