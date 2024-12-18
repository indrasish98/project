import Joi from "joi";

const roomConfigurationSchema = Joi.object({
    roomType : Joi.string()
                .min(2)
                .max(50)
                .required(),
    bedroomNumber : Joi.number()
                    .min(1)
                    .max(500)
                    .required(),
})

export { roomConfigurationSchema }