const express = require('express');
const app = express();
const port=3002;
const bodyparser = require('body-parser');
const{db}=require('./config/mongoose');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(require('./routes'));

app.listen(port,(err) => {
    if (err){
        console.log('something went wrong',err);
    }
    else{
        console.log(`listening on port ${port}`);
    }
});