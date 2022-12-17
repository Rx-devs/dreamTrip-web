import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


let activeStyle = {
  color: '#3fd0d4',
  fontWeight: '600'
}
let activeStyle2 = {
  backgroundColor: 'white',
  color: '#3fd0d4'
}

export default function Navigation() {
  const { user, logout } = useAuth();

  return (
    <Disclosure as="nav" className="nav-styles shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto md:px-6 lg:px-8 py-1 shadow-lg">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute ml-2 inset-y-0 left-0 flex items-center block md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md">
                  {open ? (
                    <MdOutlineClose className="block h-6 w-6 text-black" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6 text-black" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                {/*  navbar brand */}
                <div className="flex-shrink-0 flex items-center ">
                  <NavLink to="/home" className="text-2xl md:text-3xl font-semibold color-main">DREAMTrip</NavLink>
                </div>
                {/*  Large screen Navigation */}
                <div className="hidden md:block ml-6 my-auto">
                  <div className="flex space-x-6 lg:space-x-10">
                    {
                      navItems.map((item, index) => (
                        <div
                          key={index}>
                          <NavLink
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined}
                            className="font-medium"
                            to={item.path}>
                            {item.name}
                          </NavLink>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user.email ? (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full p-1">
                        {/* {user.photoURL ? (
                          <img
                            className="rounded-full w-7 h-7"
                            src={user.photoURL}
                            alt="profile image"
                          />
                        ) : <AiOutlineUser className="h-8 w-8 rounded-full p-1 bg-white block" />} */}
                        <AiOutlineUser className="h-8 w-8 rounded-full p-1 bg-white block" />
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
                      <Menu.Items className="flex flex-col px-5 py-4 gap-3  absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              className="block text-center"
                              to="/dashboard">
                              Dashboard
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button className="text-base typography-body block bg-white p-0" onClick={logout}>Logout</button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <>
                    <AiOutlineUser className="h-8 w-8 rounded-full p-1 bg-white block md:hidden"/>
                    <div className="hidden md:block">
                      <NavLink
                        className="lg:px-4 py-2 rounded-sm text-base color-main font-semibold"
                        to="/login">
                        Join Now
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className='absolute top-16 left-0 w-full bg-color-main z-50'>

                {/* Small screen Navigation */}
                <Disclosure.Panel static className="block md:hidden">
                  <div className="px-2 py-4 space-y-1 flex flex-col text-white font-medium">
                    {navItems.map((item, index) => (
                      <NavLink
                        key={index}
                        style={({ isActive }) =>
                          isActive ? activeStyle2 : undefined}
                        className="text-base mx-2 rounded px-4 py-3"
                        to={item.path}>
                        {item.name}
                      </NavLink>
                    ))}
                    {!user.email ? (
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle2 : undefined}
                        className="text-base mx-2 rounded px-4 py-3"
                        to="/login">
                        Join Now
                      </NavLink>
                    ) : ''}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
  // { name: '', path:'/'},
]
