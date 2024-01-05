const mongoose = require('mongoose');

const physicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender:
    {
        type: String,
        required: true
    },
    aadhaarNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: Number,
        required: true
    },
    contactDetails: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Physician', physicianSchema);
