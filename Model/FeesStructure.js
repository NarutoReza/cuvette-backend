const mongoose = require('mongoose');

const FeesStructure = new mongoose.Schema({
    name: {
        type: Number,
        required: true
    },
    studentFees: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('FeesStructure', FeesStructure);