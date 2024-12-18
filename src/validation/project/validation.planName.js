import Joi from "joi";

const planNameSchema = Joi.object({
    planName : Joi.string()
            .min(2)
            .max(250)
            .required()
})

export default planNameSchema;