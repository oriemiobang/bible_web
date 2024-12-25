const express = require('express');
// const fs = require('fs');
const bibleRoutes = require('./routes/bibleRoutes')
const userRoute = require('./routes/user')
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')



// Middleware to parse JSON request bodies
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api' ,bibleRoutes)
app.use('/api/user' ,userRoute)




mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT} and connected to db`);
    });
}).catch((error)=> {
    console.log(error)
})


