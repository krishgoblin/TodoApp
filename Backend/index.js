const express = require('express');
const app = express();
const port = 3000;
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./db');
const cors = require('cors');


//write basic boiler plate code
//use express.json() middleware

app.use(express.json());
app.use(cors());

//to update the todos
app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: "You entered wrong inputs"});
        return;
    }
    //Put to database
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({msg: "Todo created"})
    
})

//To print the todos
app.get('/todos', async function(req, res){
    const todos = await todo.find();
    res.json({
        todos
    })
})

//to update the state of the todo
app.put('/completed', async function(req, res){
    const updatePayload = req.body;
    const ParsedPaylaod = updateTodo.safeParse(updatePayload);
    if(!ParsedPaylaod.success){
        res.status(411).json({msg: "Wrong Todo Id"});
        return;
    }   
    await todo.update({
        _id: updatePayload.id
    },
    {
        completed:true
    })

    res.json({msg: "Todo Updated as Done!!"});
})

app.listen(port);