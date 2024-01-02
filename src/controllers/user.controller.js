import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apierror.js";
import { User } from "../models/user.models.js";
import { uploadcloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiresponse.js";

const registerUser = asynchandler(async (req, res) => {
  //1. get user data from frontend - Postman
  const { username, email, fullname, password } = req.body;
  console.log("email", email);
  // if (fullname === "") {
  //   throw new ApiError(400, "Fullname is required");
  // }

  //2. validation - not empty
  if (
    [username, email, fullname, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //3. check if user already exists: email or username
  const existeduser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existeduser) {
    throw new ApiError(409, "User Already Exist");
  }
  //4. check for images
  const avatarlocalpath = req.files?.avatar[0]?.path;
  const coverlocalpath = req.files?.coverimage[0]?.path;

  //5. check if avatar or not if required
  if (!avatarlocalpath) {
    throw new ApiError(404, "avatar file is required");
  }

  //6.   upload img to cloudinary, avatar check if requried

  const avatar = await uploadcloudinary(avatarlocalpath);
  const coverimg = await uploadcloudinary(coverlocalpath);

  if (!avatar) {
    throw new ApiError(404, "avatar file is required");
  }
  //7. create user object - create entry in db
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    fullname,
    password,
    avatar: avatar.url,
    coverimage: coverimg?.url || "",
  });

  //8. remove password and refresh token from response

  const CreatedUser = await User.findById(user._id).select(
    "-password -refreshtoken"
  );

  //9. check for user creation if true

  if (!CreatedUser) {
    throw new ApiError(500, "User not created");
  }

  //10. return response

  return res
    .status(200)
    .json(new ApiResponse(200, CreatedUser, "User Created Successfully"));
});

export { registerUser };
