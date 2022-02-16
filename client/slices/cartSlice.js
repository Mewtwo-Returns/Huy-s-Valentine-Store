import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: [{name:'rurubear', price:'69.69', quantity:2,
    imgSrc:'https://nationaltoday.com/wp-content/uploads/2021/08/Teddy-Bear-Day-640x514.jpg',
  },{name:'deleteMe', price:'100', quantity:1,
    imgSrc:'https://nationaltoday.com/wp-content/uploads/2021/08/Teddy-Bear-Day-640x514.jpg',
  },],
  subTotal: 50, 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    checkoutCart: (state) => {
      return initialState;
    },
    addToCart: (state, action) => {
      //if product is not in cart, add to cart object
      if (!state.cart[action.payload]){ 
        state.cart[action.payload] = 1;
      }
      else state.cart[action.payload]++;
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    updateItemQuantity: (state, action) => {
      state.items[action.payload.id].quantity = action.payload.newQuantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkoutCart, removeItem, updateItemQuantity, addToCart } = cartSlice.actions;

export default cartSlice.reducer;