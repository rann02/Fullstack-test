const initialState = {
  orders: [],
};

interface CustomerType {
  id: number;
  name: string;
}

export interface OrdersType {
  id: number;
  totalPrice: number;
  Customer: CustomerType;
}

export default function orderReducer(state = initialState, action: any) {
  switch (action.type) {
    case "FETCH_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}
