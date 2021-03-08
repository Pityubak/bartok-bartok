import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  index: 0,
  selected: 0,
  bottom: 0,
  open:false
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload
    },
    changeSelected: (state, action) => {
      state.selected = action.payload
    },
    changeBottom: (state, action) => {
      state.selected = action.payload
    },
    changeDrawer:(state,action)=>{
      state.open=action.payload
    }
  },
})

export const menuReducer = menuSlice.reducer
export const { changeIndex, changeSelected, changeBottom, changeDrawer } = menuSlice.actions
