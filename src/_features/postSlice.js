import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    post: null,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,

    reducers: {
        setPostInfo: (state, action)=>{
            state.post=action.payload;
        }
    },
});

//actions
//dispatch로 액션을 전달해 상태를 어떻게 변화시킬지 결정한다.
export const {setPostInfo} = postSlice.actions;

export const selectPost = (state) => state.post.post;

export default postSlice.reducer;