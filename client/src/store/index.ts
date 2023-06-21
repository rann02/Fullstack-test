import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/product_reducer";
import orderReducer from "./reducers/order_reducers";
import cartReducer from "./reducers/cart_reducer";
const rootReducer = combineReducers({
  productReducer,
  orderReducer,
  cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
