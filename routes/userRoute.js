import express from "express";
import { updateProfilePicture } from "../controllers/userController.js";
const router = express.Router();
router.post("/updateProfileImage", updateProfilePicture);
export default router;
