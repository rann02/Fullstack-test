import "../assets/styles/order.scss";
export default function Order() {
  return (
    <div className="container-order">
      <h2>Orders History</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Order Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Amount Due</div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            42235
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Amount">
            $350
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            42442
          </div>
          <div className="col col-2" data-label="Customer Name">
            Jennifer Smith
          </div>
          <div className="col col-3" data-label="Amount">
            $220
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            42257
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Smith
          </div>
          <div className="col col-3" data-label="Amount">
            $341
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            42311
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Carpenter
          </div>
          <div className="col col-3" data-label="Amount">
            $115
          </div>
        </li>
      </ul>
    </div>
  );
}
