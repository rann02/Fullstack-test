import "../assets/styles/product.scss";

export default function Product() {
  return (
    <>
      <div className="container-product">
        <h3 className="title"> Products </h3>

        <div className="products-container">
          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>strawberries</h3>
            <div className="price">$2.00</div>
          </div>

          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>onions</h3>
            <div className="price">$2.00</div>
          </div>

          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>tomatoes</h3>
            <div className="price">$2.00</div>
          </div>

          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>brinjal</h3>
            <div className="price">$2.00</div>
          </div>

          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>broccoli</h3>
            <div className="price">$2.00</div>
          </div>

          <div className="product">
            <div className="cover-image">
              <img
                src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>
            <h3>potatoes</h3>
            <div className="price">$2.00</div>
          </div>
        </div>
      </div>

      {/* MODAL PRODUCT DETAIL */}
      <div className="products-preview">
        <div className="preview" data-target="p-1">
          <i className="fas fa-times" />
          <div className="image-preview">
            <img
              src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
            <div className="delete-update">
              <span>Delete</span>
              <span>Update</span>
            </div>
          </div>
          <h3>organic strawberries</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, dolorem.
          </p>
          <div className="price">$2.00</div>
          <div className="buttons">
            <a href="#" className="buy">
              buy now
            </a>
            <a href="#" className="cart">
              add to cart
            </a>
          </div>
        </div>
      </div>

      {/* MODAL NEW ACCOUNT */}
      <div className="container-account">
        <div className="new-account">
          <h2 className="title-new">New Account</h2>
          <p className="title-new">Create account before order</p>
          <form>
            <input type="text" className="field-account" placeholder="Name" />
            <button className="newaccount">Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
