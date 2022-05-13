"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../app/hooks");
const commentSlice_1 = require("../features/comments/commentSlice");
const _28_svg_1 = __importDefault(require("../imgs/28.svg"));
const _29_svg_1 = __importDefault(require("../imgs/29.svg"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Comments_1 = __importDefault(require("../components/Comments"));
const Blog = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        comment: "",
    });
    const { comment, name, email } = formData;
    const { selectedBlog: { _id, body, description, index, title }, } = (0, hooks_1.useAppSelector)((state) => state.selected);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const image = index % 2 === 0 ? _28_svg_1.default : _29_svg_1.default;
    (0, react_1.useEffect)(() => { });
    (0, react_1.useEffect)(() => {
        if (!_id) {
            navigate("/");
        }
    }, [_id, navigate]);
    const sendComment = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || comment.length === 0) {
            react_toastify_1.toast.error("All fields are required");
        }
        else {
            const sendData = {
                _id,
                data: {
                    name,
                    email,
                    comment,
                },
            };
            dispatch((0, commentSlice_1.postComment)(sendData));
            react_toastify_1.toast.info('Your comment has been sent for review');
            setFormData({ name: "", email: "", comment: "" });
        }
    };
    const onChange = (e) => {
        setFormData((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "max-w-screen text-[#b6fff4] overflow-x-hidden" }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex items-center justify-center" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: " min-w-screen" }, { children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: "", width: 300, className: "bg-[#b6fff4]", draggable: "false" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "absolute bottom-1 left-0 bg-[#C71585] text-[#b6fff4] p-1 h-fit" }, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-sm" }, { children: description })) }))] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "p-8 sm:p-10 divide-y-4 divide-[#b6fff4]" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-5xl font-light mb-3" }, { children: (0, jsx_runtime_1.jsx)("p", { children: title }) })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: body }) })] })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: sendComment, className: "w-60 p-4 space-y-3" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-lg font-semibold" }, { children: "Leave A Reply" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "border rounded-tl-xl px-1" }, { children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "*Enter Name", name: "name", className: "bg-transparent focus:outline-none w-full", value: name, onChange: onChange }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "border rounded-tl-xl px-1" }, { children: (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "*Enter Email", className: "bg-transparent focus:outline-none w-full", value: email, name: "email", onChange: onChange }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "border rounded-tl-xl px-1" }, { children: (0, jsx_runtime_1.jsx)("textarea", { placeholder: "*Enter Comment", value: comment, name: "comment", onChange: onChange, className: "bg-transparent focus:outline-none w-full h-full resize-none", cols: 20 }) })), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", sx: { backgroundColor: "#b6fff4", color: "black" }, type: "submit" }, { children: "Publish" }))] })), (0, jsx_runtime_1.jsx)(Comments_1.default, { id: _id })] }) }))] }));
};
exports.default = Blog;
