const express = require("express");
const mongoose = require("mongoose");
const taskRouter= require('./routers/taskRouter.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/tasks', taskRouter);


app.use(function(req,res){
    res.status(404).send("Not Found")
})

mongoose.connect("mongodb://localhost:27017/todo")
.then(() => {
    app.listen(4000)
}
)