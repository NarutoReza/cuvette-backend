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
        default: Date.now()
    },
    permanentAddressStreetName: {
        type: String,
        required: true
    },
    permanentAddressCity: {
        type: String,
        required: true
    },
    permanentAddressState: {
        type: String,
        required: true
    },
    permanentAddressPinCode: {
        type: Number,
        required: true
    },
    permanentAddressCountry: {
        type: String,
        required: true
    },
    correspondenceAddressStreetName: {
        type: String,
        required: true
    },
    correspondenceAddressCity: {
        type: String,
        required: true
    },
    correspondenceAddressState: {
        type: String,
        required: true
    },
    correspondenceAddressPinCode: {
        type: Number,
        required: true
    },
    correspondenceAddressCountry: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    mobile2: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    assignedClass: {
        type: Number,
        default: 0
    },
    assignedClassYear: {
        type: Number,
        default: 2024
    }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', Teacher);