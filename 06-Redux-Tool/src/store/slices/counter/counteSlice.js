import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter ++
    },
    decrement: (state) => {
      if(state.counter < 1) return
      state.counter --
    },
    // incrementByAmount: (state, action) => {
    //   state.counter += action.payload
    // },

    incrementByTwo: (state, action) => {
      console.log(action);
      state.counter += action.payload
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { increment, decrement, incrementByTwo } = counterSlice.actions

