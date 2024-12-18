import CustomError from "../../utils/CustomError.js";
import { makeClearMessage} from "../../utils/validation.js"
import { addressSchema } from "../../validation/project/validation.address.js";
import { amenitySchema } from "../../validation/project/validation.amenity.js";
import { employeeSchema } from "../../validation/project/validation.employee.js";
import { paymentPlanSchema } from "../../validation/project/validation.paymentPlan.js";
import planNameSchema from "../../validation/project/validation.planName.js";
import { projectSchema } from "../../validation/project/validation.project.js";
import { projectDetailSchema } from "../../validation/project/validation.projectDetails.js";
import { roomConfigurationSchema } from "../../validation/project/validation.roomConfiguration.js";

export const projectCreationValidation=async(req,res,next)=>{

   
    const { project ,  address,  roomConfiguration, projectDetail , amenity , paymentPlan , siteEmployee } = req.body;

    if ( !project , !address ,  !projectDetail  ){

        return next( new CustomError( " Please fill all required field...",400));

    }

    if (project) {
        const { error } = projectSchema.validate(project);
        if (error) {
            const errorMessage = error.details[0].message;
            const message = makeClearMessage(errorMessage);
            return next(new CustomError(message, 400));
        }
    }
    
    if (address) {
        const { error } = addressSchema.validate(address);
        if (error) {
            const errorMessage = error.details[0].message;
            const message = makeClearMessage(errorMessage);
            return next(new CustomError(message, 400));
        }
    }
    
    if (projectDetail) {
        const { error } = projectDetailSchema.validate(projectDetail);
        if (error) {
            const errorMessage = error.details[0].message;
            const message = makeClearMessage(errorMessage);
            return next(new CustomError(message, 400));
        }
    }
   

    if( paymentPlan && paymentPlan.length > 0 ) {

        for (const element of paymentPlan) {
          
           const  { error } =  paymentPlanSchema.validate(element);

           if ( error ){
               const errorMessage = error.details[0].message;
               const message = makeClearMessage(errorMessage);
               return next( new CustomError(message,400));
                
           }
        }

    }

    if (roomConfiguration && roomConfiguration.length > 0) {

        for (const element of roomConfiguration) {
         
           const  { error } =  roomConfigurationSchema.validate(element);

           if ( error ){
               const errorMessage = error.details[0].message;
               const message = makeClearMessage(errorMessage);
               return next( new CustomError(message,400));
                
           }
        }
    
    }
    
    if (siteEmployee && siteEmployee.length > 0) {

        for (const element of siteEmployee) {
            
            const  { error } =  employeeSchema.validate(element);

            if ( error ){
                const errorMessage = error.details[0].message;
                const message = makeClearMessage(errorMessage);
                return next( new CustomError(message,400));
                 
            }
        }
    
    }

    if ( amenity ){
       
        const  { error } =  amenitySchema.validate(amenity);

            if ( error ){
                const errorMessage = error.details[0].message;
                const message = makeClearMessage(errorMessage);
                return next( new CustomError(message,400));
                 
            }
    }

    next();
}

export const roomConfigurationValidation = async(req,res,next)=>{


    const  { error } =  roomConfigurationSchema.validate(req.body);

           if ( error ){
               const errorMessage = error.details[0].message;
               const message = makeClearMessage(errorMessage);
               return next( new CustomError(message,400));
                
           }
    
    next();
}

export const addressValidation = async(req,res,next)=>{

    const  { error } =  addressSchema.validate(req.body);

    if ( error ){
        const errorMessage = error.details[0].message;
        const message = makeClearMessage(errorMessage);
        return next( new CustomError(message,400));
                
    }

    next();

}

export const employeeValidation = async(req,res,next)=>{

    const  { error } =  employeeSchema.validate(req.body);

    if ( error ){
        const errorMessage = error.details[0].message;
        const message = makeClearMessage(errorMessage);
        return next( new CustomError(message,400));
                
    }

    next();

    
}

export const paymentPlanValidation = async(req,res,next)=>{

    const  { error } =  paymentPlanSchema.validate(req.body);

    if ( error ){
        const errorMessage = error.details[0].message;
        const message = makeClearMessage(errorMessage);
        return next( new CustomError(message,400));
                
    }

    next();

    
}

export const amenityValidation = async(req,res,next)=>{

    const  { error } =  amenitySchema.validate(req.body);

    if ( error ){
        const errorMessage = error.details[0].message;
        const message = makeClearMessage(errorMessage);
        return next( new CustomError(message,400));
         
    }

    next();
    
}

export const planNameValidation = async(req,res,next)=>{

    const  { error } =  planNameSchema.validate(req.body);

    if ( error ){
        const errorMessage = error.details[0].message;
        const message = makeClearMessage(errorMessage);
        return next( new CustomError(message,400));
         
    }

    next();
    
}



