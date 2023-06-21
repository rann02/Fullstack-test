import { AppDispatch } from "..";
import { CartType } from "../reducers/cart_reducer";

const url = "http://localhost:3000";
interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export function fetchProducts() {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch: AppDispatch) => {
    // you can use api here
    try {
      const res = await fetch(url + "/products");
      if (!res.ok) {
        throw await res.json();
      }
      const data = await res.json();
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addProduct(newProduct: Product) {
  return async () => {
    try {
      const res = await fetch(url + "/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchOrders() {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(url + "/orders");
      if (!res.ok) {
        throw await res.json();
      }
      const data = await res.json();
      dispatch({
        type: "FETCH_ORDERS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setId(id: number) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: "SET_ID",
      payload: id,
    });
  };
}

export function fetchDetail(id: number) {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(url + "/product" + `/${id}`);
      const data = await res.json();
      // setData(dat)
      dispatch({
        type: "FETCH_ONE",
        payload: data,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(id: number) {
  // console.log(newContact);
  return async () => {
    try {
      const res = await fetch(url + "/product" + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function editProduct({
  id,
  dataProduct,
}: {
  id: number;
  dataProduct: Product;
}) {
  // console.log(id);
  return async () => {
    try {
      const res = await fetch(url + "/product" + `/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataProduct),
      });

      if (!res.ok) {
        throw await res.json();
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function createCart(cart: CartType) {
  // console.log(cart);
  return (dispatch: AppDispatch) => {
    dispatch({
      type: "SET_ORDERLIS",
      payload: cart,
    });
  };
}

interface OrderCartType {
  name: string;
  orders: [];
}

export function createOrder(newOrder: OrderCartType) {
  // console.log(newOrder);
  return async () => {
    try {
      const res = await fetch(url + "/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
