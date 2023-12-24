import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongoconnection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `DB CONNECTED SUCCESSFULLY FROM HOST:  ${mongoconnection.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION URL", error);
    process.exit(1);
  }
};

export default connectDB;
