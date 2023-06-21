import { useSelector } from "react-redux";
import "../assets/styles/cart.scss";
import CartComponent from "../components/CartComponent";
import { RootState } from "../store";
import NewAccount from "../components/NewAccount";
import { useState } from "react";

interface OrderSingleType {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function Cart() {
  const list = useSelector((state: RootState) => {
    return state.cartReducer.cartList;
  });

  const [togle, setTogle] = useState("none");

  const calculate = (data: Array<OrderSingleType>) => {
    let result = 0;
    data.forEach((element: OrderSingleType) => {
      result += element.price * element.quantity;
    });
    return result;
  };

  const trigerShow = () => {
    setTogle("flex");
    // console.log(idx);
  };

  return (
    <>
      <div className="cover-cart">
        <h1>Cart List</h1>
        {list?.map((el: any, idx: number) => {
          return <CartComponent key={idx} cart={el} />;
        })}
        <div className="total">
          <h3>Total price</h3>
          <span>Rp. {calculate(list)}</span>
        </div>
        <button className="checkout" onClick={trigerShow}>
          Checkout
        </button>
      </div>
      <NewAccount togle={togle} setTogle={setTogle} />
    </>
  );
}
