const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true
    },
    password: {
        required: true,
        type: String,
        max: 1024,
        min: 6,

    },
    forgotPassword: {
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255,
            unique: true
        },
        newPassword: {
            required: true,
            type: String,
            max: 1024,
            min: 6,
        },
        rePassword: {
            required: true,
            type: String,
            max: 1024,
            min: 6,
        }
    }
})


mongoose.model("User", userSchema);