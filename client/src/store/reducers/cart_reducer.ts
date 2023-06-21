import { AnyAction } from "redux";

const initialState = {
  cartList: Array<ListType>,
};

interface ListType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

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
