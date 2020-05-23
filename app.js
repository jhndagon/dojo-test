const express = require('express');
const app = express();
const cal = require('./calculator');

app.get('/add', (req,res) => {
    res.json({ 
        result: cal.add(Number(req.query.value1), Number(req.query.value2))
    });
})

app.get('/subtract', (req,res) => {
    res.json({ 
        result: cal.subtract(Number(req.query.value1), Number(req.query.value2))
    });
})


module.exports = app