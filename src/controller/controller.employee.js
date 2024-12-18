import Employee from "../model/model.employee.js";
import CustomError from "../utils/CustomError.js";

import { employeeSchema } from "../validation/project/validation.employee.js";

// add employee
const addEmployee = async (req, res, next) => {

    const { projectId } = req.params;

    try {

        let result = await Employee.create({...req.body, projectId });
        
        const data = await Employee.findByPk(result.id,{attributes: { exclude: ['updatedAt','createdAt'] }})

        return res.status(200).json({
            success: true,
            message: 'Successfully added employee to project.',
            data
        });

    } catch (error) {

        console.log("The error is: ", error);

    }
}

// delete employee
const deleteEmployee = async (req, res, next) => {

    const { employeeId } = req.params;

    try {

        await Employee.destroy({
            where: {
                id: employeeId
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Successfully deleted employee from project.',
        });

    } catch (error) {

        console.log("The error is: ", error);
        
    }
}

// get all employees based on project ID
const getEmployeeByProjectId = async (req, res, next) => {

    const { projectId } = req.params;

    try {

        const data = await Employee.findAll({
            where: {
                projectId
            },
            attributes: { exclude: ['updatedAt','createdAt'] }
        });

        return res.status(200).json({
            success: true,
            message: 'Fetching all employees for this project.',
            data
        });

    } catch (error) {

        console.log("The error is: ", error);
    }
}

// update employee based on employee ID
const updateEmployee = async (req, res, next) => {

    const { employeeId } = req.params;

    try {
        const [result] = await Employee.update(req.body, { where: { id: employeeId } });

        const data = await Employee.findByPk(employeeId,{attributes: { exclude: ['updatedAt','createdAt'] }})

        return res.status(200).json({
            success: true,
            message: 'Successfully updated employee...',
            data
        });

    } catch (error) {
        console.log("The error is: ", error);
    }
}

export {
    addEmployee,
    deleteEmployee,
    updateEmployee,
    getEmployeeByProjectId
}
