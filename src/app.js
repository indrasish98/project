import express from "express";
import projectRouter from "./route/route.project.js";

import ProjectModel from "./model/model.project.js";
import AddressModel from "./model/model.address.js";
import Employee from "./model/model.employee.js";
import Amenity from "./model/model.amenity.js";
import ProjectDetail from "./model/model.projectDetails.js";
import PaymentPlan from "./model/model.paymentplan.js";
import RoomConfiguration from "./model/model.roomConfiguration.js";

const app = express();

app.use(express.json());

app.use('/api/project',projectRouter);



export default app;

