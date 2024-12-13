import Address from "../model/model.address.js";
import Amenity from "../model/model.amenity.js";
import Project from "../model/model.project.js";
import ProjectDetail from "../model/model.projectDetails.js";

const createProject = async (req,res)=>{

    const { project ,  address,  roomConfiguration, projectDetail , amenity , paymentPlan , employee } = req.body;

    if ( !project , !address , !roomConfiguration , !projectDetail , !amenity , !paymentPlan , !employee ){

        return res.json({
                    success : false,
                    message : 'please fill all required field...'
        })

    }

    const { projectName  , propertyType } = project; 

    const { street , city , state , country } = address; 

     const {  stage, charge } = paymentPlan ;

    const {  room, floor, areaDetails, cost } = projectDetail;

    const {  roomType, bedroomNumber } = roomConfiguration;

    


    
    if ( !projectName || !displayName || !propertyType || !street || !city || !street || !state || !street || !country 
        || !room || !floor || !areaDetails || !cost || !roomType || !bedroomNumber )
        {

        return res.json({
            success : false,
            message : 'please fill all required field...'
        })

    }

    

    try {

        const existingProject =  await Project.findOne({ where: { projectName } });

        if( existingProject ){

            return res.json({
                success : false,
                message : 'this project already exist.'
            })
        }

        const result = await Project.create({projectName,propertyType});

        const project = result.toJSON();

        await Address.create({...address,projectId : project.id});
        await ProjectDetail.create({...projectDetail,projectId : project.id});
        await Amenity.create({...amenity,projectId : project.id});
        // await Address.create({...address,projectId : project.id});
        // await Address.create({...address,projectId : project.id});

        

        return res.json({
            success : true,
            message : 'successfully created data in project.',
            
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}

export {
    createProject
}