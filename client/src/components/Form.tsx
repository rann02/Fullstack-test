import "../assets/styles/addProduct.scss";
import { addProduct, editProduct } from "../store/actions/actionCreators";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetail } from "../store/actions/actionCreators";
import { RootState } from "../store";
import { AppDispatch } from "../store";

export default function Form() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams().id as unknown as number;

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  const change = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (id) {
        await dispatch(editProduct({ id, dataProduct: newProduct }));
        navigate("/");
      } else {
        await dispatch(addProduct(newProduct));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const product = useSelector((state: RootState) => {
    return state.productReducer.product;
  });

  useEffect(() => {
    dispatch(fetchDetail(id));
    // eslint-disable-next-line
    if (!!product.name && id) {
      const temp = { ...newProduct };
      temp.name = product.name;
      temp.description = product.description;
      temp.price = product.price;
      temp.imageUrl = product.imageUrl;
      setNewProduct(temp);
    } else {
      const temp = { ...newProduct };
      temp.name = "";
      temp.description = "";
      temp.price = 0;
      temp.imageUrl = "";
      setNewProduct(temp);
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="left">
      <div className="header">
        {id ? (
          <>
            <h2 className="animation a1">Edit Product</h2>
            <h4 className="animation a2">Edit product that you need</h4>
          </>
        ) : (
          <>
            <h2 className="animation a1">New Product</h2>
            <h4 className="animation a2">
              Add some product to put on the display
            </h4>
          </>
        )}
        {/* <h2 className="animation a1">New Product</h2> */}
      </div>
      <form className="form" onSubmit={handle}>
        <input
          type="text"
          className="form-field animation a3"
          placeholder="Name"
          name="name"
          onChange={change}
          value={newProduct.name}
        />
        <input
          type="number"
          className="form-field animation a4"
          placeholder="Price"
          min={0}
          name="price"
          onChange={change}
          value={newProduct.price}
        />
        <input
          type="text"
          className="form-field animation a5"
          placeholder="Image Url"
          name="imageUrl"
          onChange={change}
          value={newProduct.imageUrl}
        />
        <textarea
          className="desc-field animation a6"
          placeholder="Description"
          name="description"
          onChange={change}
          value={newProduct.description}
        />
        <button className="animation a7">ADD</button>
      </form>
    </div>
  );
}
