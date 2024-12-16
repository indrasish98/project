import app from "./app.js";
import envVariable from "./config/envConfig.js";
import sequelize from "./config/db.js";


const PORT = envVariable.PORT || 5000;

sequelize.sync( ).then(()=>{
    console.log("databases connected successfully...");
    
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`);
        
    })
}).catch((err)=>{
    console.log('database connection failed',err);
    
})

