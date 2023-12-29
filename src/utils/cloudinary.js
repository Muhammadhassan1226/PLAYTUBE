import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_NAME,
});

const uploadcloudinary = async (localfile) => {
  try {
    if (!localfile) return null;
    const res = await cloudinary.uploader.upload(localfile, {
      resource_type: "auto",
    });
    console.log("File Uploaded on Clodinary", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localfile); // Remove Locally Save File when operation failed
    return null;
  }
};
// cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

export { uploadcloudinary };
