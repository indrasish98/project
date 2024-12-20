import PaymentPlan from "../model/model.paymentplan.js";
import PlanName from "../model/model.planName.js"
import CustomError from "../utils/CustomError.js";

export const createPlanName = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    try {
        
        const result = await PlanName.create({...req.body,projectId});

        const data = await PlanName.findByPk(result.id,{attributes:['id','projectId','planName']});

        res.status(200).json({
            success : true,
            message : 'successfully created plan name',
            data
        })

     } catch (error) {
        
        console.log('the error is : ',error);
        
     }
}


export const fetchPlanNameForParticularProject = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    try {
        
      
        const data = await PlanName.findAll({where:{projectId}, attributes: { exclude: ['updatedAt','createdAt'] }});
        
        res.status(200).json({
            success : true,
            message : 'successfully fetched plan names ',
            data
        })

     } catch (error) {
        
     }
}


export const deleteParticularPlanName = async ( req,res,next)=>{
    
    const { planNameId } = req.params;

    try {
        
         await PlanName.destroy({where:{id:planNameId}});
         await PaymentPlan.destroy({where:{planNameId}});
        
        res.status(200).json({
            success : true,
            message : 'successfully deleted plan name',
        })

     } catch (error) {
        
        console.log("the error is : ",error);
        
     }
}


export const updatePlanName = async ( req,res,next)=>{
    
    const { planNameId } = req.params;

    try {
        
         const [ result ] = await PlanName.update(req.body,{where:{id:planNameId}});

         if( result == 1){

            const data = await PlanName.findByPk(planNameId,{attributes:['id','projectId','planName']});

            res.status(200).json({
                success : true,
                message : 'successfully updated plan name ',
                data
            })

         }else {
            return next( new CustomError("Sorry! updation failed.",400));
         }
        
        

     } catch (error) {
        
        console.log('the error is : ',error);
        
     }
}