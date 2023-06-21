import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/order.scss";
import OrederComponent from "../components/OrderComponent";
import { useEffect } from "react";
import { fetchOrders } from "../store/actions/actionCreators";
import { AppDispatch, RootState } from "../store";
import { OrdersType } from "../store/reducers/order_reducers";

export default function Order() {
  const orders = useSelector((state: RootState) => {
    return state.orderReducer.orders;
  });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
    //eslint-disable-next-line
  }, []);

  console.log(orders);

  return (
    <div className="container-order">
      <h2>Orders History</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">No.</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Amount Due</div>
        </li>
        {orders.map((order: OrdersType, idx: number) => {
          return <OrederComponent key={idx} order={order} idx={idx} />;
        })}
      </ul>
    </div>
  );
}
