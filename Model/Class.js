const mongoose = require('mongoose');

const Class = new mongoose.Schema({
    name: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    teacher: {
        type: String
    },
    studentFees: {
        type: Number,
        required: true
    },
    studentList: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Class', Class);