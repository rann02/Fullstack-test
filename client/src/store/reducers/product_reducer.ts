import { AnyAction } from "redux";

const initialState = {
  products: [],
  idmodal: 0,
  product: {
    id: 0,
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  },
};

export type ProductState = typeof initialState;

export default function productReducer(
  state: typeof initialState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_ID":
      return {
        ...state,
        idmodal: action.payload,
      };
    case "FETCH_ONE":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
