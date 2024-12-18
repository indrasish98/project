import Joi from 'joi';

const projectSchema = Joi.object({
  projectName: Joi.string()
    .min(2)
    .max(100)
    .required(),

  propertyType: Joi.string()
    .min(2)
    .max(50)
    .required(),


});

export { projectSchema };
