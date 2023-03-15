import React from "react";
import logo from "../../images/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav" className="navbar fixed z-20">
      <div className="navbar flex justify-between flex-row-reverse">
        <div className="dropdown relative">
          <label
            tabIndex={0}
            className="btn text-white bg-[#4C8FFF] lg:hidden hover:rotate-180 hover:bg-white hover:text-[#4c8FFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ="
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact list-none dropdown-content absolute right-4 top-16 mt-3 bg-white p-2 shadow rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
            <a>Services</a>
          </li>
            <li>
              <a>Packages</a>
            </li>
            <li>
              <a>Coverage</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a className="btn bg-[#4C8FFF] text-white pl-6 pr-6 border-none rounded-full hover:bg-white hover:text-[#4C8FFF]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl bg-white rounded-full">
          <img src={logo} alt="" className="w-14" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white list-none">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Packages</a>
          </li>
          <li>
            <a>Coverage</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
          <button id="button1" className="btn bg-[#4C8FFF] text-white pl-6 pr-6 border-none rounded-full hover:bg-white hover:text-[#4C8FFF]">
            Contact
          </button>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
