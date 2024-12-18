import Joi from "joi";

const paymentPlanSchema = Joi.object({
    stage : Joi.string()
            .min(2)
            .max(50)
            .required(),
    charge : Joi.string()
            .min(2)
            .max(50)
            .required(),


})

export { paymentPlanSchema }