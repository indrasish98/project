import Joi from "joi";

const addressSchema = Joi.object({
      street1: Joi.string()
        .min(2)
        .max(300)
        .required(),
    
      street2: Joi.string()
        .min(2)
        .max(300),
    
      city: Joi.string()
        .min(2)
        .max(100)
        .required(),
    
      state: Joi.string()
        .min(2)
        .max(100)
        .required(),
    
      country: Joi.string()
        .min(2)
        .max(100)
        .required()
})

export { addressSchema };