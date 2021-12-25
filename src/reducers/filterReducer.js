import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  q: null,
  categoryId: null,
  offset: null,
};

const filterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('filter/changeCategory', (state, action) => {
      state.categoryId = action.payload;
    })
    .addCase('filter/resetCategory', (state) => {
      state.categoryId = null;
    })
    .addCase('filter/setOffset', (state, action) => {
      state.offset += action.payload;
    })
    .addCase('filter/resetOffset', (state) => {
      state.offset = null;
    })
    .addCase('filter/initSearch', (state, action) => {
      state.q = action.payload;
    })
    .addCase('filter/clearSearch', (state) => {
      state.q = null;
    })
    .addCase('items/getItems/fullfilled', (state, action) => {
      state.offset += action.payload.length;
    });
});

export default filterReducer;
