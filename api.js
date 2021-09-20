const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
    {id: 4, name: 'User4'},
]

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/api/users', (req,res) => {
    res.send(users);
})

app.get('/api/user/:id', (req,res) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required()
    })

    let ans = schema.validate(req.body);
    console.log(ans);
    res.send(user);
})

app.post('/api/users', (req,res) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required()
    })

    let ans = schema.validate(req.body);
    console.log(ans);

    if(ans.error){
        return res.status(400).send(ans.error.details[0].message);
    }

    const user = {
        id: user.length + 1,
        name: req.body.name
    }
    users.push(user);
    res.send(user);
})

app.put('/api/users/:id', (req,res) => {
    
    const schema = Joi.object({
        name: Joi.string().min(2).required()
    })

    let ans = schema.validate(req.body);
    console.log(ans);

    if(ans.error){
        return res.status(400).send(ans.error.details[0].message);
    }

    const user = {
        id: user.length + 1,
        name: req.body.name
    }
    users.push(user);
    res.send(user);
})

app.delete('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("No user with this ID.");

    const index = users.indexOf(user)
    users.splice(index,1);

    res.send(user);
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Express on ${port}`));