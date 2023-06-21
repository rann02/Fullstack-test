import { useState } from "react";
import "../assets/styles/product.scss";
import { AppDispatch, RootState } from "../store";
import { createOrder } from "../store/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

interface NameType {
  name: string;
}

export default function NewAccount({
  togle,
  setTogle,
}: {
  togle: string;
  setTogle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const trigerClose = () => {
    setTogle("none");
  };

  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => {
    return state.cartReducer.cartList;
  });

  const [newnName, setNewName] = useState({ name: "" });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewName({
      ...newnName,
      [name]: value,
    });
  };

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createOrder({ newnName, orders: list }));
    trigerClose();
  };

  return (
    <div className="container-account" style={{ display: togle }}>
      <div className="new-account">
        <h2 className="title-new">New Account</h2>
        <p className="title-new">Create account before order</p>
        <form onSubmit={handle}>
          <input
            type="text"
            name="name"
            onChange={change}
            className="field-account"
            placeholder="Name"
          />
          <button className="newaccount">Create</button>
        </form>
      </div>
    </div>
  );
}
