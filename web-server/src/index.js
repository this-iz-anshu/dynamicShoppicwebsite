//this is going to be starting point of the application

const express = require('express');
require('./db/mongoose.js');
const user = require('./models/user.js');
const Task = require('./models/task.js');

const app = express();

const port=process.env.PORT ||3000

app.use(express.json());

// app.post('/users', (req, res) => {
//     const user = new user(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((err) => {
//         res.send(err);
//     })
// })

app.post('/tasks', (req,res) => {
    const task = new Task(req.body);
    task.save().then(res.status(201).send(task)).catch((er) => {
        res.status(400).send(er)
    })
})

app.get('/users', (req, res) => {
    user.find({}).then((users) => {res.send(users)}).catch((err)=>{res.send(err)})
})

app.listen(port, () => {
    console.log("server is up");
})