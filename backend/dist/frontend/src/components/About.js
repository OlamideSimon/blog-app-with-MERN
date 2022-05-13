"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const user_jpg_1 = __importDefault(require("../imgs/user.jpg"));
const About = () => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "grid gap-3" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex justify-center" }, { children: (0, jsx_runtime_1.jsx)("img", { src: user_jpg_1.default, alt: "", className: "rounded-full w-80 h-80", draggable: false }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-48 overflow-y-scroll font-light" }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus non ducimus cum est magnam quaerat consectetur nulla dolor. Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus non ducimus cum est magnam quaerat consectetur nulla dolor. Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus non ducimus cum est magnam quaerat consectetur nulla dolor. Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus non ducimus cum est magnam quaerat consectetur nulla dolor. Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis!" }))] })));
};
exports.default = About;
