import { configDotenv } from "dotenv";

configDotenv();

const envVariable = {
    PORT : process.env.PORT,
}

export default envVariable;