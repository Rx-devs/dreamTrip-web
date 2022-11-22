import { Disclosure, Menu,Transition  } from '@headlessui/react';
import React,{ Fragment } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const navBtnStyles = [
  'px-4', 'py-2', 'rounded-sm', 'text-base', 'text-white'
];

let activeStyle = {
  fontWeight:'500',
  textDecoration: 'underline'
}
let activeStyle2 = {
  fontWeight:'500',
  backgroundColor: 'white',
  color: '#0396A6'
}

export default function Navigation() {
  const { user, logout } = useAuth();

  return (
    <Disclosure as="nav" className="nav-styles shadow-sm z-40 w-full md:absolute top-0 left-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center block md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdOutlineClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                {/*  navbar brand */}
                <div className="flex-shrink-0 flex items-center">
                  <span className="logo-font text-white">DREAMTrip</span>
                </div>
                  {/*  Large screen Navigation */}
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-1 items-center">
                  {
                    navItems.map((item,index)=>(
                      <NavLink
                        key={index}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined}
                        className={navBtnStyles.join(" ")}
                        to={item.path}>
                        {item.name}
                      </NavLink>
                    ))
                  }
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user.email ? (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full p-1">
                      <img
                            className="rounded-full w-7 h-7"
                            src={user.photoURL}
                            alt=""
                          />
                      </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button className="px-3 py-2 rounded-sm text-l color-main font-semibold nav-btn" onClick={logout}>logout</button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                  </Menu>
                ) : (
                  <>
                  <AiOutlineUser className="h-8 w-8 rounded-full p-1 bg-white block md:hidden" />
                  <div className="hidden md:block">
                  <NavLink
                    className="px-4 py-2 rounded-sm text-base bg-white color-main font-semibold"
                    to="/login"
                  >
                    Join Now
                  </NavLink>
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">

           {/* Small screen Navigation */}
          <Disclosure.Panel static className="block md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navItems.map((item,index)=>(
              <NavLink
                key={index}
                style={({ isActive }) =>
                  isActive ? activeStyle2 : undefined}
                className={navBtnStyles.join(" ")}
                to={item.path}>
                {item.name}
              </NavLink>
            ))}
            { !user.email ? (
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle2 : undefined}
                className={navBtnStyles.join(" ")}
                to="/login">
                Join Now
              </NavLink>
            ) : ''}
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const navItems = [
  { name: 'Home', path:'/home'},
  { name: 'Gallery', path:'/gallery'},
  { name: 'Destinations', path:'/destinations'},
  { name: 'Blogs', path:'/blogs'},
  { name: 'About', path:'/about'},
  // { name: 'Login', path:'/login'},
  // { name: 'Register', path:'/register'},
  // { name: 'Dashboard', path:'/dashboard'},
  // { name: '', path:'/'},
]
