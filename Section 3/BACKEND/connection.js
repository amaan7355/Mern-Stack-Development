const mongoose = require('mongoose');


const url = 'mongodb+srv://alamamaan335:amaan@cluster0.vulhmfr.mongodb.net/myDatabase?retryWrites=true&w=majority'

// asynchronous fn - return promise
mongoose.connect(url)

.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

console.log('next statement');