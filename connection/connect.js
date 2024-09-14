const mongoose = require("mongoose");

const main = async(url)=>{
    mongoose.connect(url);
}
module.exports=main;