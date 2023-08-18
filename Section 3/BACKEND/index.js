// import express
const express = require('express');

// initialize express
const app = express();
const port = 5000;

// Routes

app.get('/', (req, res) => {
    res.send('Response from Express')
});

app.get('/home', (req, res) => {
    res.send("Response from Home");
});

app.get('/add', (req, res) => {
    res.send("Response from Add");
});

app.get('/getall', (req, res) => {
    res.send("Response from GetAll");
});


// home
// add
// getall

// starting the server 
app.listen( port, () => { console.log('express server started') } );

