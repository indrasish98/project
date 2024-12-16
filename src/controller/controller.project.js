import Address from "../model/model.address.js";
import Amenity from "../model/model.amenity.js";
import Employee from "../model/model.employee.js";
import PaymentPlan from "../model/model.paymentplan.js";
import Project from "../model/model.project.js";
import ProjectDetail from "../model/model.projectDetails.js";
import RoomConfiguration from "../model/model.roomConfiguration.js";
import CustomError from "../utis/CustomError.js"


//creating a project
const createProject = async (req,res,next)=>{
  
    const { project ,  address,  roomConfiguration, projectDetail , amenity , paymentPlan , siteEmployee } = req.body;

    if ( !project , !address ,  !projectDetail  ){

        return next( new CustomError( " Please fill all required field...",400));

    }

    const { projectName  , propertyType } = project; 

    const { street1 , street2, city , state , country } = address; 

    const {  room, floor, areaDetail, cost } = projectDetail;
    
    if ( !projectName || !propertyType || !street1 || !city  || !state  || !country 
        || !room || !floor || !areaDetail || !cost  )
    {
            return next( new CustomError( " Please fill all required field..." , 400 ));
    }
    
    try {

        const existingProject =  await Project.findOne({ where: { projectName } });

        if( existingProject ){

            return next( new CustomError( " User already exist.",403 ));

        }

        const result = await Project.create({projectName,propertyType});

        const project = result.toJSON();

        await Address.create({...address,projectId : project.id});

        await ProjectDetail.create({...projectDetail,projectId : project.id});

        await Amenity.create({...amenity,projectId : project.id});
      
        if( paymentPlan && payroomConfigurationmentPlan.length > 0 ) {

            const modifiedPaymentPlan = [];

            for (const element of paymentPlan) {
                let plan = { ...element,projectId:project.id};
                modifiedPaymentPlan.push(plan);
            }

            await PaymentPlan.bulkCreate(modifiedPaymentPlan);
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
            data : project
            
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

        const project = await Project.findByPk(projectId);

        if( projectName ){
            project.projectName = projectName;
        }

        if( propertyType ){
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