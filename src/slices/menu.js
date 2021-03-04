import { createSlice } from "@reduxjs/toolkit";
const initialState={
    index:0
}

const menuSlice=createSlice({
    name:"menu",
    initialState,
    reducers:{
        changeIndex:(state,action)=>{
            state.index=action.payload
        }
    }
})

export const menuReducer=menuSlice.reducer
export const { changeIndex }=menuSlice.actions