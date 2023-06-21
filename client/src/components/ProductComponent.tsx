import { useDispatch } from "react-redux";
import "../assets/styles/product.scss";
import { setId } from "../store/actions/actionCreators";
import { AppDispatch } from "../store";
import { ProductState } from "../store/reducers/product_reducer";

export default function ProductComponent({
  product,
  setTogle,
  idx,
}: {
  product: ProductState["product"];
  setTogle: React.Dispatch<React.SetStateAction<string>>;
  idx: number;
}) {
  const dispatch: AppDispatch = useDispatch();
  // const idmodal = useSelector((state: RootState) => {
  //   return state.productReducer.idmodal;
  // });

  const trigerTogle = (idx: number) => {
    dispatch(setId(idx));
    setTogle("flex");
    // console.log(idx);
  };

  // console.log(idmodal);

  return (
    <div className="product" onClick={() => trigerTogle(idx)}>
      <div className="cover-image">
        <img src={product.imageUrl} alt="" />
      </div>
      <h3>{product.name}</h3>
      <div className="price">Rp.{product.price}</div>
    </div>
  );
}
