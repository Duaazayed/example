"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const controllers_util_1 = require("./controllers.util");
const to_do_list_model_1 = require("../models/to-do-list.model");
const getAllTasks = (req, res) => {
    to_do_list_model_1.Tasks.find({}, (0, controllers_util_1.defaultCallback)(req, res));
};
exports.getAllTasks = getAllTasks;
const getTask = (req, res) => {
    to_do_list_model_1.Tasks.findById(req.params.taskId, (0, controllers_util_1.defaultCallback)(req, res));
};
exports.getTask = getTask;
const createTask = (req, res) => {
    const newTask = new to_do_list_model_1.Tasks({
        name: req.body.name
    });
    //newTask.save(defaultCallback(req, res));
};
exports.createTask = createTask;
const updateTask = (req, res) => {
    to_do_list_model_1.Tasks.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true });
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    to_do_list_model_1.Tasks.deleteOne({ _id: req.params.taskId }, (0, controllers_util_1.optsCallback)(req, res)({ msg: "Deleted successfully." }));
};
exports.deleteTask = deleteTask;
