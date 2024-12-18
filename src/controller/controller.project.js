import Address from "../model/model.address.js";
import Amenity from "../model/model.amenity.js";
import Employee from "../model/model.employee.js";
import PlanName from "../model/model.planName.js";
import Project from "../model/model.project.js";
import ProjectDetail from "../model/model.projectDetails.js";
import RoomConfiguration from "../model/model.roomConfiguration.js";
import CustomError from "../utils/CustomError.js"




//creating a project
const createProject = async (req,res,next)=>{
  
    const { project ,  address,  roomConfiguration, projectDetail , amenity , planName , siteEmployee } = req.body;
      
    const { projectName , propertyType } = project;

    try {

        const existingProject =  await Project.findOne({ where: { projectName } });

        if( existingProject ){

            return next( new CustomError( " User already exist.",403 ));

        }

        const project = await Project.create({projectName,propertyType});
        
        const data = await Project.findOne({
            where: { id: project.id },
            attributes: ['id','projectName','propertyType'] 
        });

        await Address.create({...address,projectId : project.id});

        await ProjectDetail.create({...projectDetail,projectId : project.id});

        await Amenity.create({...amenity,projectId : project.id});
      
        if( planName && planName.length > 0 ) {

            const modifiedPaymentPlan = [];

            for (const element of planName) {
                let plan = { ...element,projectId:project.id};
                modifiedPaymentPlan.push(plan);
            }

            await PlanName.bulkCreate(modifiedPaymentPlan);
        }

        if( roomConfiguration && roomConfiguration.length > 0 ) {

            const modifiedRoomConfiguration = [];

            for (const element of roomConfiguration) {
                let room = { ...element,projectId:project.id};
                modifiedRoomConfiguration.push(room);
            }

            await RoomConfiguration.bulkCreate(modifiedRoomConfiguration);
        }

        if( siteEmployee && siteEmployee.length > 0 ) {

            const modifiedSiteEmployee = [];

            for (const element of siteEmployee) {
                let employee = { ...element,projectId:project.id};
                modifiedSiteEmployee.push(employee);
            }

            await Employee.bulkCreate(modifiedSiteEmployee);
        }

        return res.status(200).json({
            success : true,
            message : 'successfully created data in project.',
            data 
            
        })

    } catch (error) {

        console.log("the error is : ",error);
        
    }
}

//update project name or property type
const updateproject = async(req,res,next)=>{
    
    const { projectId } = req.params;
   
    const { projectName, propertyType } = req.body;

    if ( !projectName && !propertyType ){
         next(new CustomError("please fill required field.", 400));
    }

    try {

        const project = await Project.findOne({
            where: { id: projectId },
            attributes: ['id','projectName', 'propertyType'] 
            
        });

        if( projectName ){

            if( projectName.length < 2 ){
                next(new CustomError("project name should be at least 2 character.", 400));
            }

            const existingProjectName = await Project.findOne({where:{projectName}});

            if ( existingProjectName){
                next(new CustomError("project name already exist.", 400));
            }

            project.projectName = projectName;
        }

        if( propertyType ){

            if( propertyType.length < 2 ){
                next(new CustomError("project type should be at least 2 character.", 400));
            }
            project.propertyType = propertyType;
        }

        await project.save();

        return res.status(200).json({
            success: true,
            message: 'Successfully updated ...',
            data : project
        });

    } catch (error) {
        console.log("The error is: ", error);
    }
}

export {
    createProject,
    updateproject
}