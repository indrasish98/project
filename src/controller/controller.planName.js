import PlanName from "../model/model.planName.js"

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
        
        res.status(200).json({
            success : true,
            message : 'successfully deleted plan name',
        })

     } catch (error) {
        
     }
}


export const updatePlanName = async ( req,res,next)=>{
    
    const { planNameId } = req.params;

    try {
        
      
         await PlanName.update(req.body,{where:{id:planNameId}});
         const data = await PlanName.findByPk(planNameId,{attributes:['id','projectId','planName']});
        
        res.status(200).json({
            success : true,
            message : 'successfully updated plan name ',
            data
        })

     } catch (error) {
        
     }
}