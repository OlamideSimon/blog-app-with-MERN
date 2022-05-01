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
exports.deleteUser = exports.update = exports.login = exports.getMe = exports.register = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Users_1 = __importDefault(require("../models/Users"));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// @desc register user
// @route  POST api/users
// @access public
const register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }
    const userExist = yield Users_1.default.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('User already exists!!');
    }
    const userNameExist = yield Users_1.default.findOne({ userName });
    if (userNameExist) {
        res.status(400);
        throw new Error(`Username ${userName} already exist`);
    }
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    const user = yield Users_1.default.create({
        userName,
        email,
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.userName,
            email: user.email,
            token: generateToken(user.id)
        });
    }
}));
exports.register = register;
// @desc get user data
// @route  GET api/users/me
// @access private
const getMe = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(req.user);
}));
exports.getMe = getMe;
// @desc login
// @route POST api/users/login
// @access public
const login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield Users_1.default.findOne({ email });
    if (user && (yield bcrypt.compare(password, user.password))) {
        res.send({
            _id: user.id,
            name: user.userName,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('User does not Exist');
    }
}));
exports.login = login;
// @desc update uder details
// @route POST api/users/me/update
// @access private
const update = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users_1.default.findById(req.params.id);
    if (!user) {
        res.status(401);
        throw new Error('User doesn\'t exist');
    }
    const updateUser = yield Users_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateUser);
}));
exports.update = update;
// @desc delete user
// @route DELETE api/users/me/delete
// @access private
const deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users_1.default.findById(req.params.id);
    if (!user) {
        res.status(401);
        throw new Error('User doesn\'t exist');
    }
    const delUser = yield Users_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json(delUser);
}));
exports.deleteUser = deleteUser;
// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' });
};
