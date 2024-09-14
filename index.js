const express = require('express');
const path = require("path");
const data = require('./model/data');
const Route = require('./routes/route');
const PORT = process.env.PORT || 3000;
const app = express();
//middlewares
app.use(express.static('public'))
//DB connection;
const main = require('./connection/connect');

main("mongodb://127.0.0.1:27017/hold").then((res)=>{
    console.log("mongoDB connected successfully");
})
.catch((err)=>{
    console.log("mogoDB connection Error");
});

//view setting 
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));

//routes;
app.use('/',Route);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });