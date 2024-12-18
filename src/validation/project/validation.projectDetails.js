import Joi from "joi";

const projectDetailSchema = Joi.object({
    room: Joi.number()
    .min(1)
    .max(100000)
    .required(),

  floor: Joi.number()
    .min(1)
    .max(10000)
    .required(),

  areaDetail: Joi.number()
    .min(1)
    .max(10000000000000000000)
    .required(),

  cost: Joi.number()
    .min(1)
    .max(100000000000)
    .required()
})

export { projectDetailSchema };