import { OrdersType } from "../store/reducers/order_reducers";

export default function OrederComponent({
  order,
  idx,
}: {
  order: OrdersType;
  idx: number;
}) {
  return (
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">
        {idx + 1}
      </div>
      <div className="col col-2" data-label="Customer Name">
        {order.Customer.name}
      </div>
      <div className="col col-3" data-label="Amount">
        RP. {order.totalPrice}
      </div>
    </li>
  );
}
