import "../assets/styles/cart.scss";
export default function CartComponent() {
  return (
    <>
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
              <input type="number" min={0} />
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
              <input type="number" min={0} />
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
              <input type="number" min={0} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
