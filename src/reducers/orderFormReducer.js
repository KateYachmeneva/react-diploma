import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  orderFormState: 'idle',
  adress: { value: '', error: null },
  phone: { value: '', error: null },
  agreement: { value: false },
};

const orderFormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('orderForm/changeOrder', (state, action) => {
      state[action.payload.id].value = action.payload.value;
    })
    .addCase('orderForm/checkPhone', (state, action) => {
      state.phone.error = !/^((\+7|7|8)+([0-9]){10})$/gm.test(action.payload);
    })
    .addCase('orderForm/checkAddress', (state, action) => {
      state.address.error = action.payload.length < 10;
    })
    .addCase('orderForm/sendOrder/pending', (state) => {
      state.orderForm = 'loading';
    })
    .addCase('orderForm/sendOrder/fullfilled', (state) => {
      state.orderForm = 'success';
    })
    .addCase('orderForm/sendOrder/rejected', (state, action) => {
      state.orderForm = `error:${action.payload}`;
    });
});

export default orderFormReducer;
