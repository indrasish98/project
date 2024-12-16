import { where } from "sequelize";
import PaymentPlan from "../model/model.paymentplan.js";



// add payment plan
const addPaymentPlan = async (req,res,next)=>{
  
    const { projectId } = req.params;

    const { stage , charge } = req.body; 
 
    if ( !stage || !charge  )
    {
            next( new CustomError( 400 , " Please fill all required field..."));
    }

    try {

        let result =  await PaymentPlan.create({stage,charge,projectId});

        const data = result.toJSON();

        return res.status(200).json({
            success : true,
            message : 'successfully added payment plan in project.',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}


// delete payment plan
const deletePaymentPlan = async (req,res,next)=>{
  
    const { paymentPlanId } = req.params;

   
    try {

        await PaymentPlan.destroy({
            where : {
                id : paymentPlanId
            }
        });

        return res.status(200).json({
            success : true,
            message : 'successfully deleted payment plan in project.',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}

//get all payment plan on the basis of particular project Id 
const getPaymentPlanByProjectId = async ( req,res,next)=>{
    const { projectId } = req.params;
 
      try {

        let result =  await PaymentPlan.findAll({
            where : {
                projectId
            }
        });
        
        return res.status(200).json({
            success : true,
            message : 'fetching all payment plans for this project.',
            data : result
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}


//update payment plan according to the payment plan id  
const updatePaymentPlan = async ( req,res,next)=>{

    const { paymentPlanId } = req.params;

    const { stage , charge } = req.body;
 
      try {

        await PaymentPlan.update({stage,charge},{where : { id : paymentPlanId}})
        

        return res.status(200).json({
            success : true,
            message : 'successfully updated payment plan...',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}



export {
    addPaymentPlan,
    deletePaymentPlan,
    updatePaymentPlan,
    getPaymentPlanByProjectId
}