"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const hooks_1 = require("../app/hooks");
const Card_1 = __importDefault(require("../components/Card"));
const Spinner_1 = __importDefault(require("../components/Spinner"));
const blogSlice_1 = require("../features/blogs/blogSlice");
const Deck = () => {
    const { blogs, isError, isLoading, message } = (0, hooks_1.useAppSelector)((state) => state.blogs);
    const dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        if (isError) {
            react_toastify_1.toast.error(message);
        }
        dispatch((0, blogSlice_1.getBlog)());
    }, [dispatch, isError, message]);
    isLoading && (0, jsx_runtime_1.jsx)(Spinner_1.default, {});
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-[40vh] w-full items-center flex justify-center" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'text-center flex flex-col items-center' }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'text-sm font-semibold animate-pulse text-[#b6fff4]' }, { children: "Swipe right/left to discard" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'relative w-60' }, { children: blogs.map(({ _id, body, description, title, user }, index) => ((0, jsx_runtime_1.jsx)(Card_1.default, { _id: _id, user: user, title: title, description: description, body: body, index: index + 1 }, _id))) }))] })) })));
};
exports.default = Deck;
