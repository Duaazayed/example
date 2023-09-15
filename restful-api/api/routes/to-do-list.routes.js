"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
const controllers_1 = require("../controllers");
const express = require("express");
exports.todoRoutes = express.Router();
exports.todoRoutes.get("/", controllers_1.getAllTasks).post("/", controllers_1.createTask);
exports.todoRoutes
    .get("/:taskId", controllers_1.getTask)
    .post("/:taskId", controllers_1.updateTask)
    .delete("/:taskId", controllers_1.deleteTask);
