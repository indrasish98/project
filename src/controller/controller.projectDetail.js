import PaymentPlan from "../model/model.paymentplan.js";
import PlanName from "../model/model.planName.js"
import ProjectDetail from "../model/model.projectDetails.js";
import CustomError from "../utils/CustomError.js";




export const fetchProjectDetailForParticularProject = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    try {
        
      
        const data = await ProjectDetail.findOne({where:{projectId}, attributes: { exclude: ['updatedAt','createdAt'] }});
        
        res.status(200).json({
            success : true,
            message : 'successfully fetched project detail ',
            data
        })

     } catch (error) {
        
     }
}




export const updateProjectDetail = async ( req,res,next)=>{
    
    const { projectId } = req.params;

    try {
        
         const [ result ] = await ProjectDetail.update(req.body,{where:{projectId}});

         if( result == 1){

            const data = await ProjectDetail.findByPk(projectId,{attributes: { exclude: ['updatedAt','createdAt'] }});

            res.status(200).json({
                success : true,
                message : 'successfully updated project details ',
                data
            })

         }else {
            return next( new CustomError("Sorry! updation failed.",400));
         }
        
        

     } catch (error) {
        
        console.log('the error is : ',error);
        
     }
}