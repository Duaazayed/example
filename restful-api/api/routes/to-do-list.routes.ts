import {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} from "../controllers";

import express = require("express");

export const todoRoutes = express.Router();

todoRoutes.get("/", getAllTasks).post("/", createTask);
todoRoutes
.get("/:taskId", getTask)
.post("/:taskId", updateTask)
.delete("/:taskId", deleteTask);






