import { where } from "sequelize";
import Employee from "../model/model.employee.js";
import CustomError from "../utils/CustomError.js";

// add employee
const addEmployee = async (req, res, next) => {
    const { projectId } = req.params;
    const { firstName, lastName, solution, email, workPhone, mobile, communicationChannel } = req.body;

    if (!firstName || !lastName || !solution || !email || !workPhone || !mobile || !communicationChannel) {
        return next(new CustomError("Please fill all required fields...", 400));
    }

    try {
        let result = await Employee.create({ firstName, lastName, solution, email, workPhone, mobile, communicationChannel, projectId });
        const data = result.toJSON();

        return res.status(200).json({
            success: true,
            message: 'Successfully added employee to project.',
            data: data
        });
    } catch (error) {
        console.log("The error is: ", error);
        return next(new CustomError("Failed to add employee.", 500));
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
        return next(new CustomError("Failed to delete employee.", 500));
    }
}

// get all employees based on project ID
const getEmployeeByProjectId = async (req, res, next) => {
    const { projectId } = req.params;

    try {
        let result = await Employee.findAll({
            where: {
                projectId
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Fetching all employees for this project.',
            data: result
        });
    } catch (error) {
        console.log("The error is: ", error);
        return next(new CustomError("Failed to fetch employees.", 500));
    }
}

// update employee based on employee ID
const updateEmployee = async (req, res, next) => {
    const { employeeId } = req.params;
    const { firstName, lastName, solution, email, workPhone, mobile, communicationChannel } = req.body;

    try {
        await Employee.update({ firstName, lastName, solution, email, workPhone, mobile, communicationChannel }, { where: { id: employeeId } });

        return res.status(200).json({
            success: true,
            message: 'Successfully updated employee...',
        });
    } catch (error) {
        console.log("The error is: ", error);
        return next(new CustomError("Failed to update employee.", 500));
    }
}

export {
    addEmployee,
    deleteEmployee,
    updateEmployee,
    getEmployeeByProjectId
}
