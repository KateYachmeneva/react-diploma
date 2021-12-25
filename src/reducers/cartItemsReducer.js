import { nanoid, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartItemsSlice = createSlice({
  name: 'cartitems',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existing = false;
      const act = action.payload;
      let result = [];

      if (state.lenth > 0) {
        result = state.map((el) => {
          if (el.id === act.id && el.size === act.size) {
            existing = true;
            return {
              ...el,
              quantity: el.quantity + act.quantity,
              price: act.price,
            };
          }
          return el;
        });
      }
      if (!existing) {
        result.push({
          cartItemId: nanoid(),
          title: act.title,
          size: act.size,
          price: act.price,
          newPrice: act.price,
          quantity: act.quantity,
          id: act.id,
          delete: false,
        });
      }
      return result;
    },
    toggleDeleteCartItem: (state, action) => state.map((el) => {
      if (el.id === action.payload) {
        return {
          ...el,
          delete: !el.delete,
        };
      }
      return el;
    }),
    removeDeleted: (state) => state.filter((el) => el.delete === false),
    clearCart: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase('cart/fetchPrices/fulfilled', (state, action) => (el) => ({
      ...el,
      newPrice: action.payload.find((elTwo) => elTwo.id === el.id).price,
    }));
  },
});

export default cartItemsSlice.reducer;
