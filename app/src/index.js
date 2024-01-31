const express = require('express');
const app = express();
const port = 8080;

app.get('/add/:num1/:num2', (req, res) => {
    console.log("Got request")
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (!isNaN(num1) && !isNaN(num2)) {
        
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.status(400).send('Invalid numbers. Please provide two numbers as part of the path.');
    }
});

app.listen(port, () => {
    console.log(`Server is running...`);
});