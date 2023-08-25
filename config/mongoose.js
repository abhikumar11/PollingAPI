const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/pollingapi');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting database'));
db.once('open',()=>{console.log('connected to database')});
module.exports=db;
