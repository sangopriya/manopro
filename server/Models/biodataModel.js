const mongoose = require('mongoose');

const justOne = new mongoose.Schema({
    name: {
        type:'String',
        required:true
    },
    age: {
        type:'number',
        required:true
    },
    standard: {
        type:'number',
        required:true
    }
})

module.exports = mongoose.model('BioData',justOne)