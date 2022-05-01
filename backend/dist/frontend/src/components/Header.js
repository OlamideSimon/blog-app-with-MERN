"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
const Twitter_1 = __importDefault(require("@mui/icons-material/Twitter"));
const Instagram_1 = __importDefault(require("@mui/icons-material/Instagram"));
const Header = () => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'bg-transparent flex p-5 justify-between items-center' }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'text-xl sm:text-2xl underline font-serif text-[#b6fff4] font-bold uppercase' }, { children: "Saadatu_blog" })) })) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { children: (0, jsx_runtime_1.jsx)(Facebook_1.default, { sx: { color: '#b6fff4', fontSize: 30 } }) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { children: (0, jsx_runtime_1.jsx)(Twitter_1.default, { sx: { color: '#b6fff4', fontSize: 30 } }) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { children: (0, jsx_runtime_1.jsx)(Instagram_1.default, { sx: { color: '#b6fff4', fontSize: 30 } }) })] })] })));
};
exports.default = Header;
