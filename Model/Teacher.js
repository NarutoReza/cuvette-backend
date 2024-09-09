const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', Teacher);