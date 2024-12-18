import PaymentPlan from "../model/model.paymentplan.js";
import CustomError from "../utils/CustomError.js";




// add payment plan
const addPaymentPlan = async (req,res,next)=>{

    const { planNameId } = req.params;
    const { projectId } = req.query;

    try {

        let result =  await PaymentPlan.create({...req.body,planNameId,projectId});

        const data = await PaymentPlan.findByPk(result.id ,{
            attributes: ['id','planNameId','stage', 'charge'] 
        });

       

        return res.status(200).json({
            success : true,
            message : 'successfully added payment plan in project.',
            data
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

    const { planNameId } = req.params;
 
      try {

        const data = await PaymentPlan.findAll({
            where: { planNameId },
            attributes: ['id','planNameId','stage', 'charge'] 
        });
        
        return res.status(200).json({
            success : true,
            message : 'fetching all payment plans for this plan name.',
            data 
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}


//update payment plan according to the payment plan id  
const updatePaymentPlan = async ( req,res,next)=>{

    const { paymentPlanId } = req.params;
 
      try {

        const [ result ] = await PaymentPlan.update(req.body,{where : { id : paymentPlanId}})

        if ( result == 1 ){
            const data = await PaymentPlan.findByPk(paymentPlanId,{attributes: ['id','planNameId','stage', 'charge']} );
            return res.status(200).json({
                success : true,
                message : 'successfully updated payment plan...',
                data
            })

        }else {
            return next( new CustomError("Not updated!. please try again.",500));
        }
        

       

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