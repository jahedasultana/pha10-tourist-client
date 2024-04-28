import { Link, NavLink } from "react-router-dom";

import { renderToString } from "react-dom/server";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [theme, setTheme] = useState('light');

  useEffect(() =>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleToggle = (e) =>{
    if(e.target.checked){
        setTheme('dark')
    }else{
        setTheme('light')
    }
  }

  // console.log(user);

  const tooltipContent = <>{user?.displayName || "User name not found"}</>;
  const tooltipString = renderToString(tooltipContent);

  const navLinks = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/allTourists">All Tourists Spot</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/addTourists">Add Tourists Spot</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/myList"> My List</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="navbar bg-base-200 border-b-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost sm:hidden "
            >
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-pop font-semibold lg:text-2xl  sm:flex items-center justify-center  bg-gradient-to-r from-cyan-400 to-violet-700  text-transparent bg-clip-text">
            <span>
              <img
                src="palette.png"
                alt=""
                className="w-10 h-10 hidden sm:block "
              />
            </span>
            Tourists
          </a>
        </div>
        <div className="navbar-center  hidden sm:block md:flex lg:flex">
          <ul className="menu menu-horizontal   px-1 gap-4">{navLinks}</ul>

         
        </div>

        {user ? (
          <div className="navbar-end gap-4">
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="tooltip tooltip-bottom mr-4  btn btn-ghost  btn-circle avatar"
                data-tip={tooltipString}
              >
                <div className="w-12 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />

                  <button
                    className="btn text-white absolute mt-8 right-0 p-2 rounded-md shadow-md opacity-0 hover:opacity-100 transition-opacity hover:bg-blue-800 duration-300"
                    onClick={logout}
                  >
                    LogOut
                  </button>
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className=" gap-4">
            <Link to="/login">
              <button className="btn bg-blue-800 text-white">Login</button>
            </Link>
          </div>
        )}

<label className="cursor-pointer grid place-items-center">
            <input
            onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
      </div>
     
    </div>
  );
};

export default Navbar;
