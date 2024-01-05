const express = require('express');
const cors=require('cors')
require('./db/config')
const physiciansRoute=require('./routes/physicians')


const app = express();
app.use(cors())
app.use(express.json())


app.use('/', physiciansRoute);


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})