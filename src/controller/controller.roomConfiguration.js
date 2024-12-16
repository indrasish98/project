import RoomConfiguration from "../model/model.roomConfiguration.js";



// add payment plan
const addRoom = async (req,res,next)=>{
  
    const { projectId } = req.params;

    const { roomType , bedroomNumber } = req.body; 
 
    if ( !roomType || !bedroomNumber  )
    {
            next( new CustomError( 400 , " Please fill all required field..."));
    }

    try {

        let result =  await RoomConfiguration.create({roomType,bedroomNumber,projectId});

        return res.status(200).json({
            success : true,
            message : 'successfully added room configuration in project.',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}


// delete room configuration 
const deleteRoom = async (req,res,next)=>{
  
    const { roomId } = req.params;

   
    try {

        await RoomConfiguration.destroy({
            where : {
                id : roomId
            }
        });

        return res.status(200).json({
            success : true,
            message : 'successfully deleted room configuration in project.',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}

//get all room configuration on the basis of particular project Id 
const getAllRoomByProjectId = async ( req,res,next)=>{

    const { projectId } = req.params;
 
      try {

        let result =  await RoomConfiguration.findAll({
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
const updateRoom = async ( req,res,next)=>{

    const { roomId } = req.params;

    const { roomType , bedroomNumber } = req.body;
 
      try {

        await PaymentPlan.update({roomType,bedroomNumber},{where : { id : roomId}})
        

        return res.status(200).json({
            success : true,
            message : 'successfully updated payment plan...',
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}



export {
    addRoom,
    deleteRoom,
    updateRoom,
    getAllRoomByProjectId
}