import { NavLink } from "react-router-dom";

function HeaderComp() {
  return (
    <nav className="top-nav">
      <h2 className="top-nav-title">Student Management System</h2>
      <div className="top-nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `top-nav-link${isActive ? " top-nav-link-active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `top-nav-link${isActive ? " top-nav-link-active" : ""}`
          }
        >
          Students
        </NavLink>
        <span className="top-nav-link top-nav-link-muted">
          Reports
        </span>
      </div>
    </nav>
  );
}
export default HeaderComp;