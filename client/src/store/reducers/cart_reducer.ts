import { AnyAction } from "redux";

interface Store {
  cartList: [];
}

const initialState: Store = {
  cartList: [],
};

export type CartType = typeof initialState;

export default function cartReducer(
  state: typeof initialState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case "SET_ORDERLIS":
      return {
        ...state,
        cartList: action.payload,
      };
    default:
      return state;
  }
}
