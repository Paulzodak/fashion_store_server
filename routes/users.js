import express from "express";
import { createUser, fetchUser } from "../controllers/user.js";
const router = express.Router();
router.post("/signup", createUser);
router.post("/fetchUser", fetchUser);
// router.post("/", createTodos);
// router.patch("/:id", updateTodo);
// router.delete("/:id", deleteTodo);
export default router;
