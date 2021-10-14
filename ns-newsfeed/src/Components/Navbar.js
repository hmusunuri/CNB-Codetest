import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex bg-theme-analog shadow-lg">
        <div className="flex-none lg:flex">
          <button className="btn btn-square btn-ghost">
            <div className="rounded-full w-10 h-10">
              <img alt="fb logo" src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" />
            </div>
          </button>
        </div>
        <div className="flex-1 px-2 mx-2 hidden sm:flex">
          <div className="flex-1 lg:flex-none">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-ghost rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-none ml-auto sm:ml-0">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img alt="avatar" src="https://i.pravatar.cc/500?img=32" />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
