import { Router } from "express";
import { addEmployee,
         deleteEmployee,
         getEmployeeByProjectId,
         updateEmployee } from "../controller/controller.employee.js";
import { employeeValidation } from "../middleware/validatonMiddleware/middleware.projectValidation.js";

const employeeRoute = Router();

employeeRoute.post('/add/:projectId',employeeValidation, addEmployee);
employeeRoute.get('/get/:projectId', getEmployeeByProjectId);
employeeRoute.delete('/delete/:employeeId', deleteEmployee);
employeeRoute.put('/update/:employeeId',employeeValidation,updateEmployee);

export default employeeRoute;
