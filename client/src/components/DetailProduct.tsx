import { useEffect } from "react";
import "../assets/styles/product.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "../store/actions/actionCreators";
import { deleteProduct } from "../store/actions/actionCreators";
import { fetchProducts } from "../store/actions/actionCreators";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../store";

export default function DetailProduct({
  togle,
  setTogle,
}: {
  togle: string;
  setTogle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const trigerTogle = () => {
    setTogle("none");
  };

  const idmodal = useSelector((state: RootState) => {
    return state.productReducer.idmodal;
  });
  const product = useSelector((state: RootState) => {
    return state.productReducer.product;
  });

  const dispatch: AppDispatch = useDispatch();

  const deleteHandler = async () => {
    await dispatch(deleteProduct(idmodal));
    await dispatch(fetchProducts());
    setTogle("none");
  };

  useEffect(() => {
    dispatch(fetchDetail(idmodal));
    //eslint-disable-next-line
  }, [idmodal]);

  console.log(product);

  return (
    <div className="products-preview" style={{ display: togle }}>
      <div className="preview" data-target="p-1">
        <i className="fas fa-times" onClick={trigerTogle} />
        <div className="image-preview">
          <div className="delete-update">
            <span onClick={deleteHandler}>Delete</span>
            <NavLink className="update-link" to={`product/${idmodal}`}>
              Update
            </NavLink>
          </div>
          <img src={product.imageUrl} alt="" />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">Rp. {product.price}</div>
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
  );
}
