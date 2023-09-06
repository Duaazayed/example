import express = require('express');

const app = express();

//app.route('/').get(/* all my task */);

app
.route('/tasks')
.get((req, res) => {})
.post();

app
.route('/tasks/:taskId')
.get()
.post()
.delete();


