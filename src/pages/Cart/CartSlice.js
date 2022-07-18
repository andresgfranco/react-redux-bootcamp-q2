import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsOnCart: [],
  },
  reducers: {
    updateTotalQuantityOnCart: (state, action) => {
      const {idToFind, quantity} = action.payload;

      if (state.itemsOnCart.find((element) => element.item.id === idToFind)) {
        state.itemsOnCart.find((element) => element.item.id === idToFind).quantity = quantity;
      }
    },
    addItemToCart: (state,  action) => {
      const {item} = action.payload;
      const idToFind = item.id;

      if (state.itemsOnCart.find((element) => element.item.id === idToFind)) {
        state.itemsOnCart.find((element) => element.item.id === idToFind).quantity += 1;
      } else {
        state.itemsOnCart.push({item, quantity: 1});
      }
    },
    removeItemFromCart: (state, action) => {
      const {idToFind} = action.payload;
      const elementToDelete = (element) => element.item.id === idToFind;
      const indexToDelete = state.itemsOnCart.findIndex(elementToDelete);

      state.itemsOnCart.splice(indexToDelete, 1);
    }
  },
});

export const { updateTotalQuantityOnCart, addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
