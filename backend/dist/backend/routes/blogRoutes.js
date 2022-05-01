"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.route('/').get(blogController_1.getBlogs).post(authMiddleware_1.protect, blogController_1.addBlogs);
router.route('/:id').post(authMiddleware_1.protect, blogController_1.edit).delete(authMiddleware_1.protect, blogController_1.deleteBlog);
exports.default = router;
