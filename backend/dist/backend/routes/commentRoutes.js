"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../controllers/commentController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.route('/:id').get(commentController_1.getComments).post(commentController_1.postComment);
router.route('/:id/:CId').delete(authMiddleware_1.protect, commentController_1.deleteComment);
exports.default = router;
