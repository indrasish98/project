import RoomConfiguration from "../model/model.roomConfiguration.js";
import CustomError from "../utils/CustomError.js";




// add payment plan
const addRoom = async (req,res,next)=>{

    const { projectId } = req.params;
  
    try {

        let result =  await RoomConfiguration.create({...req.body,projectId});

        const data = await RoomConfiguration.findByPk(result.id,{attributes: { exclude: ['updatedAt','createdAt'] }})

        return res.status(200).json({
            success : true,
            message : 'successfully added room configuration in project.',
            data 
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
            },
            attributes: { exclude: ['updatedAt','createdAt'] }
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

   
 
      try {

        const [ result ] = await RoomConfiguration.update(req.body,{where : { id : roomId}})
        
        if ( result == 1 ){
            const data = await RoomConfiguration.findByPk(roomId,{attributes: { exclude: ['updatedAt','createdAt'] }});
            return res.status(200).json({
                success : true,
                message : 'successfully updated room configuration...',
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
    addRoom,
    deleteRoom,
    updateRoom,
    getAllRoomByProjectId
}