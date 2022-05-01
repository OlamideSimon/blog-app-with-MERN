"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.edit = exports.addBlogs = exports.getBlogs = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Blogs_1 = __importDefault(require("../models/Blogs"));
// @desc get blogs
// @route  GET api/blogs
// @access public
const getBlogs = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield Blogs_1.default.find();
    res.status(200).json(blogs);
}));
exports.getBlogs = getBlogs;
// @desc add a blog
// @route  POST api/blogs
// @access private
const addBlogs = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, body, description } = req.body;
    if (!title || !body || !description) {
        res.status(400);
        throw new Error('Enter all Fields');
    }
    const blog = yield Blogs_1.default.create({
        title,
        body,
        description,
        user: req.user.id,
    });
    res.status(200).send(blog);
}));
exports.addBlogs = addBlogs;
// @desc edit a blog
// @route  POST api/blogs/:id
// @access private
const edit = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_1.default.findById(req.params.id);
    if (!blog) {
        res.status(401);
        throw new Error(`Blog with id ${req.params.id} doesn't exist`);
    }
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }
    if (blog.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    const update = yield Blogs_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(update);
}));
exports.edit = edit;
// @desc Delete a blog
// @route DELETE api/blogs/:id
// @access Private
const deleteBlog = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_1.default.findById(req.params.id);
    if (!blog) {
        res.status(401);
        throw new Error(`Blog with id ${req.params.id} doesn't exist`);
    }
    if (blog.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not Authorized');
    }
    const delBlog = yield Blogs_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json(delBlog);
}));
exports.deleteBlog = deleteBlog;
