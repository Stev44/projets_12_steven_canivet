import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
  name: 'switchLang',
  initialState: {
    lang: false,
  },
  reducers: {
    setLang(state, action) {
      if (action.payload.lang !== undefined) {
        state.lang = action.payload.lang
      }
    },
  },
})

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    fadeClass: '',
  },
  reducers: {
    setFadeClass(state, action) {
      if (action.payload.fadeClass !== undefined) {
        state.fadeClass = action.payload.fadeClass
      }
    },
  },
})

export const { setLang } = switchSlice.actions
export const { setFadeClass } = animationSlice.actions
