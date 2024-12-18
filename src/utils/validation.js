import CustomError from "./CustomError.js";

const makeClearMessage = (notClearMessage)=>{
    const clearMessage = notClearMessage.replace(/[\\"]/g,"");
    return clearMessage;
}

const validate = (next,schema,data)=>{
    const  { error } = schema.validate(data);

      if ( error ){
          const errorMessage = error.details[0].message;
          const message = makeClearMessage(errorMessage);
          return next( new CustomError(message,400));
      }
}

export { validate };