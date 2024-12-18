import Joi from "joi";

const amenitySchema = Joi.object({
    
    cctv: Joi.boolean(),

    gymnesium: Joi.boolean(),

    security: Joi.boolean(),

    reflexologyPark: Joi.boolean(),

    gatedCommunity: Joi.boolean(),

    visitorParking: Joi.boolean(),

    landscapeGarden: Joi.boolean(),

    joggingTrack: Joi.boolean(),

    swimmingPool: Joi.boolean(),

    amphithetre: Joi.boolean(),

    indorGame: Joi.boolean(),

    acCommunityHall: Joi.boolean(),
    
    seniorCitizenSeatOut: Joi.boolean()
});

export { amenitySchema };
