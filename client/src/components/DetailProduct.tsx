import { useEffect, useState } from "react";
import "../assets/styles/product.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "../store/actions/actionCreators";
import { deleteProduct } from "../store/actions/actionCreators";
import { fetchProducts } from "../store/actions/actionCreators";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { createCart } from "../store/actions/actionCreators";

interface TypeOfCart {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  id: number;
}

export default function DetailProduct({
  togle,
  setTogle,
}: {
  togle: string;
  setTogle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => {
    return state.cartReducer.cartList;
  });

  const [cart, setCart] = useState([]);

  const addToCart = async ({
    e,
    data,
  }: {
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
    data: any;
  }) => {
    e.preventDefault();
    await setCart([
      ...cart,
      {
        name: data.name,
        price: data.price,
        imageUrl: data.imageUrl,
        quantity: 1,
        id: data.id,
      },
    ]);
    dispatch(createCart(cart));
  };

  const trigerTogle = () => {
    setTogle("none");
  };

  const idmodal = useSelector((state: RootState) => {
    return state.productReducer.idmodal;
  });
  const product = useSelector((state: RootState) => {
    return state.productReducer.product;
  });

  const deleteHandler = async () => {
    await dispatch(deleteProduct(idmodal));
    await dispatch(fetchProducts());
    setTogle("none");
  };

  useEffect(() => {
    dispatch(fetchDetail(idmodal));
    //eslint-disable-next-line
  }, [idmodal]);

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
          <a className="cart" onClick={(e) => addToCart({ e, data: product })}>
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
