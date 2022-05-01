"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    email: {
        type: String,
        required: [true, 'Please add email']
    },
    comment: {
        type: String,
        required: [true, 'Please comment must be included']
    },
    blog: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Blogs',
        required: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Comments', CommentSchema);
