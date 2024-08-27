import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
  name: 'switch',
  initialState: {
    mode: 'normal',
  },
  reducers: {
    setToggle(state, action) {
      if (action.payload.mode !== undefined) {
        state.mode = action.payload.mode
      }
    },
  },
})

export const { setToggle } = switchSlice.actions
