import "../assets/styles/product.scss";
import ProductComponent from "../components/ProductComponent";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/actionCreators";
import DetailProduct from "../components/DetailProduct";
import { AppDispatch, RootState } from "../store";
import { ProductState } from "../store/reducers/product_reducer";

export default function Product() {
  const products = useSelector((state: RootState) => {
    return state.productReducer.products;
  });
  const dispatch: AppDispatch = useDispatch();

  const [togle, setTogle] = useState("none");

  useEffect(() => {
    dispatch(fetchProducts());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container-product">
        <h3 className="title">Products</h3>
        <div className="products-container">
          {products.map((product: ProductState["product"], idx: number) => {
            return (
              <>
                <ProductComponent
                  product={product}
                  key={idx}
                  setTogle={setTogle}
                  idx={product.id}
                />
              </>
            );
          })}
        </div>
      </div>
      <DetailProduct togle={togle} setTogle={setTogle} />
    </>
  );
}
