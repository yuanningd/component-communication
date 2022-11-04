import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const brotherSlice = createSlice({
  name: 'brother',
  initialState,
  reducers: {
    update: (state) => {
      return state + 1
    }
  }
})

export const { update } = brotherSlice.actions
export default brotherSlice.reducer;