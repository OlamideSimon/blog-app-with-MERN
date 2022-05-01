"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
const hooks_1 = require("../app/hooks");
const commentSlice_1 = require("../features/comments/commentSlice");
const Spinner_1 = __importDefault(require("./Spinner"));
const Comments = ({ id }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { comments, isLoading, isError, message } = (0, hooks_1.useAppSelector)((state) => state.comments);
    (0, react_1.useEffect)(() => { }, []);
    (0, react_1.useEffect)(() => {
        if (isError) {
            react_toastify_1.toast.error(message);
        }
        dispatch((0, commentSlice_1.getComment)(id));
        return () => {
            dispatch((0, commentSlice_1.reset)());
        };
    }, [id, dispatch, isError, message]);
    isLoading && (0, jsx_runtime_1.jsx)(Spinner_1.default, {});
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: comments.length > 0 ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "px-5 md:px-10" }, { children: comments === null || comments === void 0 ? void 0 : comments.map((comment) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "p-3" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex items-center space-x-2 w-36 text-sm" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, Object.assign({ sx: { backgroundColor: "#b6fff4", color: "black" } }, { children: (_a = comment === null || comment === void 0 ? void 0 : comment.name) === null || _a === void 0 ? void 0 : _a.charAt(0) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "w-full" }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "truncate" }, { children: comment === null || comment === void 0 ? void 0 : comment.name })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-xs truncate" }, { children: new Date(comment === null || comment === void 0 ? void 0 : comment.createdAt).toUTCString() }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "p-2" }, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "" }, { children: comment === null || comment === void 0 ? void 0 : comment.comment })) }))] }), comment === null || comment === void 0 ? void 0 : comment._id));
            }) }))) : ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Be the first to comment" }) })) }));
};
exports.default = Comments;
