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
exports.reset = exports.blogSlice = exports.getBlog = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const blogService_1 = __importDefault(require("./blogService"));
const initialState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};
exports.getBlog = (0, toolkit_1.createAsyncThunk)('api/goals', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield blogService_1.default.getBlogs();
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.blogSlice = (0, toolkit_1.createSlice)({
    name: 'blogs',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.getBlog.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.getBlog.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        })
            .addCase(exports.getBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});
exports.reset = exports.blogSlice.actions.reset;
exports.default = exports.blogSlice.reducer;
