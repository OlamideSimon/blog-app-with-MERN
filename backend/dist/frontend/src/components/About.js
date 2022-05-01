"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const user_jpg_1 = __importDefault(require("../imgs/user.jpg"));
const About = () => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'grid gap-3' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: '' }, { children: (0, jsx_runtime_1.jsx)("img", { src: user_jpg_1.default, alt: '', className: 'rounded-full w-80 h-80', draggable: false }) })), (0, jsx_runtime_1.jsx)("div", { children: "Chingili Sa'adatu is the CEO of" })] })));
};
exports.default = About;
