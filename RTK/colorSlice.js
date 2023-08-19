import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'rgba(112, 112, 112, 1)',
};


const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
 
  }
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer; //This should just export the reducer
