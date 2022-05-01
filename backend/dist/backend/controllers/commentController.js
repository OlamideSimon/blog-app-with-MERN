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
exports.deleteComment = exports.postComment = exports.getComments = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Blogs_1 = __importDefault(require("../models/Blogs"));
const Comments_1 = __importDefault(require("../models/Comments"));
// @desc    get all comments
// @route   GET api/comments/:id
// @access  public
const getComments = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield Blogs_1.default.findById(req.params.id);
    if (!blog) {
        res.status(401);
        throw new Error('Blog doesn\'t exist');
    }
    ;
    const comments = yield Comments_1.default.find({ blog: req.params.id }).sort({ "createdAt": -1 });
    res.status(200).json(comments);
}));
exports.getComments = getComments;
// @desc    post a comment
// @route   POST api/comments/:id
// @access  private
const postComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, comment } = req.body;
    const blog = yield Blogs_1.default.findById(req.params.id);
    if (!blog) {
        res.status(400);
        throw new Error('Blog doesn\'t exist');
    }
    if (!comment || !name || !email) {
        res.status(400);
        throw new Error('All fields are required');
    }
    const add = Comments_1.default.create({
        name,
        email,
        comment,
        blog: req.params.id
    });
    res.status(200).send(add);
}));
exports.postComment = postComment;
// @desc    delete a comment
// @route   DELETE api/comments/:id/:CId
// @access  private
const deleteComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield Comments_1.default.findById(req.params.CId);
    const blog = yield Blogs_1.default.findById(req.params.id);
    if (!blog) {
        res.status(401);
        throw new Error('Blog doesn\'t exist');
    }
    if (!comment) {
        res.status(401);
        throw new Error('Comment does not exist');
    }
    const delComment = yield Comments_1.default.findByIdAndDelete(req.params.CId);
    res.status(200).send(delComment);
}));
exports.deleteComment = deleteComment;
