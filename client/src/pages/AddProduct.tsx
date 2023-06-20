import "../assets/styles/addProduct.scss";

export default function AddProduct() {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">New Product</h2>
          <h4 className="animation a2">
            Add some product to put on the display
          </h4>
        </div>
        <form className="form">
          <input
            type="text"
            className="form-field animation a3"
            placeholder="Name"
          />
          <input
            type="number"
            className="form-field animation a4"
            placeholder="Price"
          />
          <input
            type="text"
            className="form-field animation a5"
            placeholder="Image Url"
          />
          <textarea
            className="desc-field animation a6"
            placeholder="Description"
          />
          <button className="animation a7">ADD</button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
}
