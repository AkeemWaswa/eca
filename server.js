const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Hi Akeem, you can do this for the world and your family! Do not give up');
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
