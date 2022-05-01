"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectOpenBlog = exports.reset = exports.selectBlog = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    selectedBlog: {
        _id: null,
        user: null,
        title: null,
        description: null,
        body: null,
        index: 0,
    }
};
const selectedBlog = (0, toolkit_1.createSlice)({
    name: 'selectedBlog',
    initialState,
    reducers: {
        selectBlog: (state, action) => {
            state.selectedBlog = action.payload;
        },
        reset: (state) => {
            state.selectedBlog = initialState.selectedBlog;
        }
    }
});
_a = selectedBlog.actions, exports.selectBlog = _a.selectBlog, exports.reset = _a.reset;
const selectOpenBlog = (state) => state.selectedBlog.selectBlog;
exports.selectOpenBlog = selectOpenBlog;
exports.default = selectedBlog.reducer;
