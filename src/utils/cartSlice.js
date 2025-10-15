import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    remoteItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      console.log(current(state));
      // this won't work as it is updating the reference
      // we need to mutate the existing state
      // state.items = []
      state.items.length = 0;

      // you can also return new state
      // return { items: []} ;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, remoteItem, clearCart } = cartSlice.actions;
