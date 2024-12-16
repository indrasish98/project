import { Router } from "express";
import { addEmployee,
         deleteEmployee,
         getEmployeeByProjectId,
         updateEmployee } from "../controller/controller.employee.js";

const employeeRoute = Router();

employeeRoute.post('/add/:projectId', addEmployee);
employeeRoute.get('/get/:projectId', getEmployeeByProjectId);
employeeRoute.delete('/delete/:employeeId', deleteEmployee);
employeeRoute.put('/update/:employeeId', updateEmployee);

export default employeeRoute;
