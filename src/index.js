// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";

connectDB();

dotenv.config({
  path: "./env",
});

// we use iffi
// adding ; before iffi is best best practice
// it is used to avoid any error

// Second Approach

/*   First Approach
  
    (async () => {
        try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App Listen on ${process.env.PORT}`);
        });
        } catch (error) {
        console.error("Error Occur In DB Connection", error);
        throw error;
        }
    }
    )()

*/
