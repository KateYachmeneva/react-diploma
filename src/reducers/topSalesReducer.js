import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topsalesState: 'idle',
  topsalesList: [],
};

const topsalesSlice = createSlice({
  name: 'topsales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('topsales/getTopSales/fulfilled', (state, action) => {
      state.topsalesState = 'idle';
      state.topsalesList = action.payload;
    });
    builder.addCase('topsales/getTopSales/pending', (state) => {
      state.topsalesState = 'loading';
    });
    builder.addCase('topsales/getTopSales/rejected', (state, action) => {
      state.topsalesState = `error: ${action.payload}`;
    });
  },
});

export default topsalesSlice.reducer;
