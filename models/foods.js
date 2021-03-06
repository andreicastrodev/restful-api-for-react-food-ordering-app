const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const foodScema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Food', foodScema);