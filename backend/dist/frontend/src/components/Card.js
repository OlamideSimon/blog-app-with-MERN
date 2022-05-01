"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const hooks_1 = require("../app/hooks");
const react_router_dom_1 = require("react-router-dom");
const selectedBlogSlice_1 = require("../features/blogs/selectedBlogSlice");
const _28_svg_1 = __importDefault(require("../imgs/28.svg"));
const _29_svg_1 = __importDefault(require("../imgs/29.svg"));
const Card = ({ _id, body, description, title, user, index }) => {
    const motionValue = (0, framer_motion_1.useMotionValue)(0);
    const rotateValue = (0, framer_motion_1.useTransform)(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = (0, framer_motion_1.useTransform)(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    const animControls = (0, framer_motion_1.useAnimation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const image = index % 2 === 0 ? _28_svg_1.default : _29_svg_1.default;
    const selected = () => {
        dispatch((0, selectedBlogSlice_1.selectBlog)({
            _id,
            body,
            description,
            title,
            user,
            index
        }));
        navigate(`${_id}`);
    };
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ drag: 'x', style: { x: motionValue, rotate: rotateValue, opacity: opacityValue }, dragConstraints: { left: -1000, right: 1000 }, onDragEnd: (event, info) => {
            if (Math.abs(info.point.x) <= 300) {
                animControls.start({ x: 100 });
            }
            else {
                animControls.start({ x: info.point.x < 0 ? -200 : 200 });
            }
        }, className: 'absolute top-8 -left-2 cursor-pointer w-64 h-1', onClick: selected }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'bg-slate-300 rounded-lg shadow-slate-800 shadow-md border-2 border-[#b6fff4]' }, { children: [(0, jsx_runtime_1.jsx)("img", { draggable: 'false', alt: '', src: image, className: 'rounded-t-lg w-full h-48 bg-[#b6fff4]' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ' rounded-b-lg p-5' }, { children: (0, jsx_runtime_1.jsx)("h1", { children: title }) }))] })) })));
};
exports.default = Card;
