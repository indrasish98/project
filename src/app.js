import express from "express";
import projectRouter from "./route/route.project.js";
import errorMiddleware from "./middleware/ErrorHandleware.js";
import paymentPlanRoute from "./route/route.paymentPlan.js";

const app = express();

app.use(express.json());

app.use('/api/project',projectRouter);
app.use('/api/payment-plan',paymentPlanRoute);


app.use(errorMiddleware);



export default app;

