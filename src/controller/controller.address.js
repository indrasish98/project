import { where } from "sequelize";
import Address from "../model/model.address.js";
import CustomError from "../utils/CustomError.js";

// get  addresse based on project ID
const getAddressByProjectId = async (req, res, next) => {

    const { projectId } = req.params;

    try {
        let result = await Address.findByPk(projectId);

        return res.status(200).json({
            success: true,
            message: 'Fetching  addresses for this project.',
            data: result
        });
    } catch (error) {
        console.log("The error is: ", error);
        return next(new CustomError("Failed to fetch addresses.", 500));
    }
}

// update address based on address ID
const updateAddress = async (req, res, next) => {
    const { addressId } = req.params;
    const { street1, street2, city, state, country } = req.body;

    try {
        await Address.update({ street1, street2, city, state, country }, { where: { id: addressId } });

        return res.status(200).json({
            success: true,
            message: 'Successfully updated address...',
        });
    } catch (error) {
        console.log("The error is: ", error);
        return next(new CustomError("Failed to update address.", 500));
    }
}

export {
    getAddressByProjectId,
    updateAddress
}
