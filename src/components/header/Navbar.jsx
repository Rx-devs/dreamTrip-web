import { RiDashboardLine, RiLogoutBoxLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

let activeStyle = {
  color: "#3fd0d4",
  fontWeight: "600",
};
let activeStyle2 = {
  backgroundColor: "white",
  color: "#3fd0d4",
  fontWeight: "600",
};

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-link lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="0"
            className="menu menu-sm gap-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-screen scale-0"
          >
            {/* nav links for small screen */}
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeStyle2 : undefined
                  }
                  className="rounded-lg py-2"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-link no-underline hover:no-underline text-2xl md:text-3xl font-semibold md:ms-4 text-[#3fd0d4]">
          dreamTrip
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* nav links for large screen */}
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={item.path}
                className="btn btn-link no-underline text-base hover:no-underline active:no-underline hover:text-[#3fd0d4]"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end md:me-8">
        {/*  profile dropdown */}
        {user.email ? (
          <div className="dropdown dropdown-end cursor-pointer">
            {/* avatar */}
            <div className="ml-3 relative m-1" tabIndex="0" role="button">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-[#3fd0d4] ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 text-base mt-3 md:mt-5"
            >
              <li>
                <NavLink className="rounded-lg" to="/dashboard">
                  <RiDashboardLine size={20} />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <a className="rounded-lg" onClick={logout}>
                  <RiLogoutBoxLine size={20} />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            className="btn btn-link no-underline text-base hover:no-underline active:no-underline hover:text-[#3fd0d4]"
            to="/login"
          >
            Join Now
          </NavLink>
        )}
      </div>
    </nav>
  );
}

const navItems = [
  { name: "Home", path: "/home" },
  { name: "Gallery", path: "/gallery" },
  { name: "Destinations", path: "/destinations" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  // { name: '', path:'/'},
];
