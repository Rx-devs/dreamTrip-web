import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const navBtnStyles = [
  'px-3', 'py-2', 'rounded-sm', 'text-base', 'nav-btn',
  'hover:text-black', 'text-white'
];

let activeStyle = {
  // color: `var(--dark)`
  color: `black`
}

export default function Navigation() {
  const { user, logout } = useAuth();
  
  return (
    <Disclosure as="nav" className="nav-styles shadow-sm z-40 w-full md:absolute top-0 left-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <span className="logo-font text-white">DREAMTrip</span>
                </div>
                
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                      className={navBtnStyles.join(" ")}
                      to="/home">
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                      className={navBtnStyles.join(" ")}
                      to="/gallery">
                      Gallery
                    </NavLink>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                      className={navBtnStyles.join(" ")}
                      to="/dashboard">
                      Dashboard
                    </NavLink>
                    {user.email ?
                      <button className="px-3 py-2 rounded-md text-l font-semibold nav-btn" onClick={logout}>logout</button>
                      :
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined}
                        className={navBtnStyles.join(" ")}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white flex text-sm rounded-full border-2 divide-slate-800">
                      {/* <span className="sr-only">Open user menu</span> */}
                      {
                        user.email && <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      }
                      {
                        !user.email && <AiOutlineUser className="h-8 w-8 rounded-full p-1" />
                      }
                    </Menu.Button>
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              <NavLink className="px-3 py-2 rounded-md text-l font-medium nav-btn"
                to="/home">
                Home
              </NavLink>
              <NavLink className="px-3 py-2 rounded-md text-l font-medium nav-btn"
                to="/gallery">
                Gallery
              </NavLink>
              <NavLink className="px-3 py-2 rounded-md text-l font-medium hover:bg-gray-800 hover:text-white"
                to="/dashboard">
                Dashboard
              </NavLink>
              {user.email ?
                <button className="px-3 py-2 rounded-md text-l font-medium hover:bg-gray-800 hover:text-white" onClick={logout}>logout</button>
                :
                <NavLink className="px-3 py-2 rounded-md text-l font-medium hover:bg-gray-800 hover:text-white"
                  to="/login"
                >
                  Login
                </NavLink>
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
