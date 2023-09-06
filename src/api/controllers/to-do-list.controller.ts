import {Task} from './../models/to-do-list-model';

export const gelAllTasks = (req: any, res: any) => {
    Task.find({}, (err: any, tasks: any) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
};

export const getTask = () => {};

export const createTask = () => {};

export const deleteTask = () => {};
