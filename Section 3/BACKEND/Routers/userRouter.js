const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

//add
router.post('/add', (req,res) => {
    console.log(req.body);
    res.send('Response from user Router');
});

//getall
router.get('/getall', (req,res) => {
    res.send('Response from user getall');
});

//getbyemail
router.get('/getbyemail', (req,res) => {
    res.send('Response from user getbyemail')
});

//getbyid
router.get('/getbyid', (req,res) => {
    res.send('Response from user getbyid');
});

//update
router.get('/update', (req,res) => {
    res.send('Response from user update');
});


module.exports = router