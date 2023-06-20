import "../assets/styles/cart.scss";
export default function Cart() {
  return (
    <div className="cover-cart">
      <h1>Cart List</h1>
      <div className="cart">
        <img
          src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="gambar"
        />
        <div className="desc-cart">
          <span>Nama product</span>
          <div className="price-quantity">
            <span>Harga</span>
            <div className="action-quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <img
          src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="gambar"
        />
        <div className="desc-cart">
          <span>Nama product</span>
          <div className="price-quantity">
            <span>Harga</span>
            <div className="action-quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <img
          src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="gambar"
        />
        <div className="desc-cart">
          <span>Nama product</span>
          <div className="price-quantity">
            <span>Harga</span>
            <div className="action-quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="total">
        <h3>Total price</h3>
        <span>Rp. 100.000</span>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
