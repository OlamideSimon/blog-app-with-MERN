"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password']
    }
});
exports.default = (0, mongoose_1.model)('Users', UserSchema);
