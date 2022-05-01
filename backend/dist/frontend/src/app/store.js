"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const blogSlice_1 = __importDefault(require("../features/blogs/blogSlice"));
const selectedBlogSlice_1 = __importDefault(require("../features/blogs/selectedBlogSlice"));
const commentSlice_1 = __importDefault(require("../features/comments/commentSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        blogs: blogSlice_1.default,
        selected: selectedBlogSlice_1.default,
        comments: commentSlice_1.default
    },
});
