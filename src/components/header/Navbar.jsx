import {
  RiCloseLine,
  RiDashboardLine,
  RiLogoutBoxLine,
  RiMenu2Line,
} from "@remixicon/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, logout } = useAuth();
  return (
    <nav className="navbar bg-base-100 px-0">
      {/* logo and navigation for small screen */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* menu button */}
          <div
            onClick={() => {
              setShowNavLinks(!showNavLinks);
              setShowDropdown(false);
            }}
            tabIndex={1}
            role="button"
            className="btn btn-link lg:hidden"
          >
            {!showNavLinks ? (
              <RiMenu2Line size={22} color="#3fd0d4" />
            ) : (
              <RiCloseLine
                size={22}
                color="#3fd0d4"
                className="bg-neutral-900"
              />
            )}
          </div>
          {/* nav links for small screen */}
          {showNavLinks && (
            <ul
              tabIndex={1}
              className="menu menu-sm gap-1 dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-b-lg w-screen scale-0 lg:hidden "
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle2 : undefined
                    }
                    className="rounded-lg py-2"
                    to={item.path}
                    onClick={() => {
                      setShowNavLinks(false);
                      setShowDropdown(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* logo */}
        <Link
          style={{ color: "#3fd0d4" }}
          to="/"
          onClick={() => {
            setShowDropdown(false);
            setShowNavLinks(false);
          }}
          className="btn btn-link no-underline hover:no-underline text-2xl md:text-3xl font-semibold md:ms-6"
        >
          dreamTrip
        </Link>
      </div>
      {/* navigation for large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* nav links for large screen */}
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={item.path}
                onClick={() => setShowDropdown(false)}
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
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="ml-3 relative m-1"
              tabIndex="0"
              role="button"
            >
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-[#3fd0d4] ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            {/* dropdown items */}
            {showDropdown && (
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 text-base mt-3 md:mt-5"
              >
                <li>
                  <NavLink
                    onClick={() => setShowDropdown(false)}
                    className="rounded-lg"
                    to="/dashboard"
                  >
                    <RiDashboardLine size={20} />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <a
                    className="rounded-lg"
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                  >
                    <RiLogoutBoxLine size={20} />
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink
            className="btn btn-link no-underline text-base hover:no-underline active:no-underline hover:text-[#3fd0d4]"
            to="/login"
            onClick={() => setShowNavLinks(false)}
          >
            Join Now
          </NavLink>
        )}
      </div>
    </nav>
  );
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Destinations", path: "/destinations" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  // { name: '', path:'/'},
];
