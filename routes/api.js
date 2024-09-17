import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/taskController.js"
import * as UsersController from "../app/controllers/userController.js"
import AuthMiddelware from "../app/middelwares/AuthMiddelware.js";

//users
router.post("/Registration", UsersController.Registration)
router.post("/Login", UsersController.Login)
router.get("/ProfileDetails", AuthMiddelware,UsersController.ProfileDetails)
router.post("/ProfileUpdate", AuthMiddelware,UsersController.ProfileUpdate)
router.get("/EmailVerify/:email", UsersController.EmailVerify)
router.post("/CodeVerify", UsersController.CodeVerify)
router.post("/ResetPassword", UsersController.ResetPassword)


// Task
router.post("/CreateTask", AuthMiddelware,TaskController.CreateTask)
router.get("/UpdateTaskStatus/:id/:status", AuthMiddelware,TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus/:status", AuthMiddelware,TaskController.TaskListByStatus)
router.get("/DeleteTask/:id", AuthMiddelware,TaskController.DeleteTask)
router.get("/CountTask", AuthMiddelware,TaskController.CountTask)


export default router;