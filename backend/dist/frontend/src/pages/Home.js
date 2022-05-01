"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("../components/About"));
const Home = () => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-[80vh] w-full items-center flex justify-center" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "text-center grid gap-3 p-5 sm:px-20 text-[#b6fff4]" }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "text-5xl font-semibold" }, { children: "Welcome" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "font-light text-xl" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "\"Information is a source of learning. But unless it is organized, processed, and available to the right people in a format for decision making, it is a burden, not a benefit.\"" }), (0, jsx_runtime_1.jsx)("p", { children: "~ William Pollard" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex justify-center text-center items-center space-x-3" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/blogs" }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", sx: { backgroundColor: "#b6fff4", color: "#000a" } }, { children: "Browse" })) })), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", onClick: () => setShowModal(!showModal), sx: { backgroundColor: "#b6fff4", color: "#000a" } }, { children: "About the Author" }))] }))] })) })), showModal ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "relative w-auto my-6 mx-auto max-w-3xl" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "relative p-6 flex-auto" }, { children: (0, jsx_runtime_1.jsx)(About_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150", type: "button", onClick: () => setShowModal(false) }, { children: "Close" })) }))] })) })) })) })) : null] }));
};
exports.default = Home;
