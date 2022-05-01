import { createSlice } from '@reduxjs/toolkit'
import { SelectedBlog } from '../../utils/interface'

const initialState: SelectedBlog = {
    selectedBlog: {
        _id: null,
        user: null,
        title: null,
        description: null,
        body: null,
        index: 0,
    }
}

const selectedBlog = createSlice({
    name: 'selectedBlog',
    initialState,
    reducers: {
        selectBlog: (state, action) => {
            state.selectedBlog = action.payload
        },
        reset: (state) => {
            state.selectedBlog = initialState.selectedBlog
        }
    }
})

export const { selectBlog, reset } = selectedBlog.actions
export const selectOpenBlog = (state: { selectedBlog: { selectBlog: any } }) => state.selectedBlog.selectBlog

export default selectedBlog.reducer