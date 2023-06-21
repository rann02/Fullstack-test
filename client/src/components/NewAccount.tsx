import "../assets/styles/product.scss";
export default function NewAccount() {
  return (
    <div className="container-account">
      <div className="new-account">
        <h2 className="title-new">New Account</h2>
        <p className="title-new">Create account before order</p>
        <form>
          <input type="text" className="field-account" placeholder="Name" />
          <button className="newaccount">Create</button>
        </form>
      </div>
    </div>
  );
}
