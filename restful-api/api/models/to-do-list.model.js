"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const mongoose_1 = require("mongoose");
const task_model_1 = require("./task.model");
const statusTypes = Object.values(task_model_1.STATUS_TYPES);
const TasksSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'A task name is required to create a new task',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: [
            {
                type: String,
                enum: [...statusTypes],
            },
        ],
        default: [task_model_1.STATUS_TYPES.PENDING],
    },
});
exports.Tasks = (0, mongoose_1.model)('Tasks', TasksSchema);
