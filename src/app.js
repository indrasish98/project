import express from "express";
import projectRouter from "./route/route.project.js";
import errorMiddleware from "./middleware/ErrorHandleware.js";
import paymentPlanRoute from "./route/route.paymentPlan.js";
import addressRoute from "./route/route.address.js";
import amenityRoute from "./route/route.amenity.js";
import employeeRoute from "./route/route.employee.js";
import roomConfigurationRoute from "./route/route.roomConfiguration.js";
import planNameRouter from "./route/route.planName.js";

const app = express();

app.use(express.json());

app.use('/api/project',projectRouter);
app.use('/api/payment-plan',paymentPlanRoute);
app.use('/api/address',addressRoute);
app.use('/api/amenity',amenityRoute);
app.use('/api/employee',employeeRoute);
app.use('/api/room',roomConfigurationRoute);
app.use('/api/plan-name',planNameRouter);


app.use(errorMiddleware);



export default app;

