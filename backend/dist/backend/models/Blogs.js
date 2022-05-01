"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
        required: [true, 'Please enter blog\'s description']
    },
    body: {
        type: String,
        required: [true, 'Please enter blog\'s body']
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Blogs', BlogSchema);
