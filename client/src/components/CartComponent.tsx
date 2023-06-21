import "../assets/styles/cart.scss";
interface OrderSingleType {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function CartComponent({ cart }: { cart: OrderSingleType }) {
  return (
    <>
      <div className="cart">
        <img src={cart.imageUrl} alt="gambar" />
        <div className="desc-cart">
          <span>{cart.name}</span>
          <div className="price-quantity">
            <span>{cart.price}</span>
            <div className="action-quantity">
              {/* <input type="number" min={0} value={cart.quantity} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
