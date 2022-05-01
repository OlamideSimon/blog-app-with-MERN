import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CommentState } from '../../utils/interface'
import commentService from './commentService'

const initialState: CommentState = {
    comments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getComment = createAsyncThunk('api/comments', async(id: any, thunkAPI) => {
  try {
      return await commentService.getComments(id)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }  
})

export const postComment = createAsyncThunk('api/comments/id', async(body: any, thunkAPI) => {
    try {
        return await commentService.postComment(body)
    } catch (error: any) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }  
  })

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(postComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.comments.push(action.payload)
            })
            .addCase(postComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.comments = action.payload
            })
    }
})

export const { reset } = commentSlice.actions
export default commentSlice.reducer