"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.commentSlice = exports.postComment = exports.getComment = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const commentService_1 = __importDefault(require("./commentService"));
const initialState = {
    comments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};
exports.getComment = (0, toolkit_1.createAsyncThunk)('api/comments', (id, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield commentService_1.default.getComments(id);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.postComment = (0, toolkit_1.createAsyncThunk)('api/comments/id', (body, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield commentService_1.default.postComment(body);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.commentSlice = (0, toolkit_1.createSlice)({
    name: 'comments',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.postComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.postComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
            .addCase(exports.postComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.getComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.getComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.getComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.comments = action.payload;
        });
    }
});
exports.reset = exports.commentSlice.actions.reset;
exports.default = exports.commentSlice.reducer;
