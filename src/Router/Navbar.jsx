import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className='bg-[#f40000] py-5 px-12 text-white'>
        <div className='justify-between flex'>
          {openMenu ? (
            <IoCloseSharp
              onClick={() => { setOpenMenu(false) }}
              className='lg:hidden text-3xl' />
          ) : (
            <IoMdMenu
              onClick={() => { setOpenMenu(true) }}
              className='lg:hidden text-3xl' />
          )}
          <div>
            <img className='w-36 h-14' src='/images/wsports.jpg' alt="Logo" />
          </div>
          <div className='hidden lg:block'>
            <input className='px-6 py-2 rounded-md text-sm w-72 text-red-500'
              type="search" placeholder='Search...' />
          </div>
          <div>
            <img src='/images/phone-white.svg' className='h-6 w-6 md:h-10 md:w-10' alt="Phone Icon" />
          </div>
        </div>
        <div className='hidden lg:flex justify-center py-1 font-sans font-semibold gap-10'>
          <NavLink
            className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            to='/'> Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            to='/dashboard'>Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            to='/contact'> Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            to='/about'> About
          </NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
            to='/profile'> Profile
          </NavLink>
        </div>
      </div>
      <div className={` ${openMenu ? 'flex' : 'hidden'} flex-col px-6 text-white font-semibold text-xl gap-2 w-full bg-[#f40000]`}>
        <NavLink
          className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
          to='/'> Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
          to='/dashboard'>Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
          to='/contact'> Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
          to='/about'> About
        </NavLink>
        <NavLink
          className={({ isActive }) => `hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md ${isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : ''}`}
          to='/profile'> Profile
        </NavLink>
      </div>
    </>
  )
}

export default Navbar;
