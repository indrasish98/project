import Address from "../model/model.address.js";
import CustomError from "../utils/CustomError.js";
import { validate } from "../utils/validation.js";
import { addressSchema } from "../validation/project/validation.address.js";

// get  addresse based on project ID
const getAddressByProjectId = async (req, res, next) => {

    const { projectId } = req.params;

    try {

        let data = await Address.findByPk(projectId,{attributes: { exclude: ['updatedAt','createdAt'] }});

        return res.status(200).json({
            success: true,
            message: 'Fetching  addresses for this project.',
            data
        });

    } catch (error) {
        console.log("The error is: ", error);
    }
}

// update address based on address ID
const updateAddress = async (req, res, next) => {

    const { projectId } = req.params;
    const { street1, street2, city, state, country } = req.body;

    if (!street1 || !city || !state || !country) {
        return next( new CustomError("please field all required field.",400));
    }

    validate(next,addressSchema,req.body);

    try {

        const [ result ] = await Address.update({ street1, street2, city, state, country }, { where: { projectId } });
        
        if( result == 1 ){

            const data = await Address.findOne({where:{projectId},attributes: { exclude: ['updatedAt','createdAt'] }})
            return res.status(200).json({
                success: true,
                message: 'Successfully updated address.',
                data
            });

        }else {

            return next( new CustomError("Not updated!. please try again.",500));
        }
        
    } catch (error) {

        console.log("The error is: ", error);
    }
}

export {
    getAddressByProjectId,
    updateAddress
}
