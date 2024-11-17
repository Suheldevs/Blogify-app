import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    loading:null,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
            signinStart:(state)=>{
                state.loading = true;
                state.error = null;
            },
            signinSuccess:(state,action)=>{
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            },
            singFailure:(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            },
    }

});
export const {signinStart, signinSuccess, singFailure} = userSlice.actions;
export default userSlice.reducer