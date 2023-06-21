import "../assets/styles/cart.scss";
import CartComponent from "../components/CartComponent";
export default function Cart() {
  return (
    <div className="cover-cart">
      <h1>Cart List</h1>
      <CartComponent />
      <div className="total">
        <h3>Total price</h3>
        <span>Rp. 100.000</span>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
