    const { model, Schema } = require('../connection');

    const mySchema = new Schema({
        Name : String,
        email : String,
        password : String,
        age : Number
    });

   module.exports =  model( 'user', mySchema );