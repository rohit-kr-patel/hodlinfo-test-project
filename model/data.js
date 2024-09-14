const mongoose = require('mongoose');

const cryptocurrencySchema = mongoose.Schema({
        base_unit:{
            type:String,
        },
        quote_unit:{
            type:String,
        },
        low:{
            type:String,
        },
        high:{
            type:String,
        },
        last:{
            type:String,
        },
        volume:{
            type:String,
        },
        sell:{
            type:String,
        },
        buy: {
            type:String,
        },
        name:{
            type:String,
        }
});

const data = mongoose.model('data',cryptocurrencySchema);
module.exports = data;