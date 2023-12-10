require('dotenv').config();

const express = require('express'); 
const app = express();
// const port = 3000;

app.get('/',(req,res) => {
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send("htdocs")
})
app.listen(process.env.PORT,( )=>{
    console.log(`this listening on this port ${port}`);
})