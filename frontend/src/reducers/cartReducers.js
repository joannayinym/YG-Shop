import * as cartActiontypes from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: null },
  action
) => {
  switch (action.type) {
    case cartActiontypes.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case cartActiontypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case cartActiontypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case cartActiontypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case cartActiontypes.CART_RESET:
      return { cartItems: [], shippingAddress: {}, paymentMethod: null };
    default:
      return state;
  }
};
