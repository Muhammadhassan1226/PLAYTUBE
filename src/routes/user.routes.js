import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
// http://data.com/users/register

// http://data.com/users/login
export default router;
