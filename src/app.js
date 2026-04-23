const express = require('express');

const app = express(); 



app.use("/hello", (req,res) => {
    res.send("hello");
});

app.use("/test", (req,res) => {
    res.send("test");
});

app.use("/", (req,res) => {
    res.send("Hell World");
});

app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
}); 