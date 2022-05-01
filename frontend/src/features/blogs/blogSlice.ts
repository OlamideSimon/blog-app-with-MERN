import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BlogState } from '../../utils/interface'
import blogService from './blogService'

const initialState: BlogState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getBlog = createAsyncThunk('api/goals', async(_, thunkAPI) => {
    try {
        return await blogService.getBlogs()
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.blogs = action.payload
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer