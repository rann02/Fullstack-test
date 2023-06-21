import "../assets/styles/layout.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container-main">
      <nav className="navbar-cover">
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navlink" : isActive ? "navlink navactive" : "navlink"
            }
            to={"/"}
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navlink" : isActive ? "navlink navactive" : "navlink"
            }
            to={"/newproduct"}
          >
            Add Product
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navlink" : isActive ? "navlink navactive" : "navlink"
            }
            to={"/cart"}
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navlink" : isActive ? "navlink navactive" : "navlink"
            }
            to={"/order"}
          >
            Orders
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
