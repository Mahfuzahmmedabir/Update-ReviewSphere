import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to={'/se'}> Services</NavLink>
      {user ? (
        <>
          <NavLink to={'/addservice'}>Add Service</NavLink>
          <NavLink to={'/services'}> My Services</NavLink>
          <NavLink to={'/reviews'}>My Reviews</NavLink>
        </>
      ) : (
        <></>
      )}
    </>
  );
  const handealLogOut = () => {
    logOut().then(result => {
      Swal.fire('Log Out successfully');
    });
  };

  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start z-50">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ReviewSphere</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal font-semibold text-[16px] flex gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user?.email ? (
            <div>
              

              <button
                className=" "
                onClick={() =>
                  document.getElementById('my_modal_2').showModal()
                }
              >
                <span>
                  {user?.photoURL ? (
                    <img className="rounded-full w-8" src={user?.photoURL} alt="" />
                  ) : (
                    user.email
                  )}
                </span>
              </button>
              <dialog
                id="my_modal_2"
                className="modal  lg:-mt-60 lg:ml-[500px] -mt-32  "
              >
                <div className="modal-box w-48 lg:w-96  ">
                  <h3 className="font-bold text-lg text-center">
                    {user?.displayName}
                  </h3>

                  <p className=" text-center">
                    <button onClick={handealLogOut} className="btn">
                      Log out
                    </button>
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ) : (
            <div>
              <Link to={'/login'}>
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
