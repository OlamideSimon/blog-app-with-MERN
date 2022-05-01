"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("./components/Header"));
const Home_1 = __importDefault(require("./pages/Home"));
const react_router_dom_1 = require("react-router-dom");
const Blog_1 = __importDefault(require("./pages/Blog"));
const Deck_1 = __importDefault(require("./pages/Deck"));
const Footer_1 = __importDefault(require("./components/Footer"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "bg-bg-img min-h-screen overflow-x-hidden min-hw-screen bg-cover md:bg-contain" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative bg-black min-h-screen bg-opacity-75" }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'blogs', element: (0, jsx_runtime_1.jsx)(Deck_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'blogs/:id', element: (0, jsx_runtime_1.jsx)(Blog_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: '/', replace: true }) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })) })) }));
}
exports.default = App;
