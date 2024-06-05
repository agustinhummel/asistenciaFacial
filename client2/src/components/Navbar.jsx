import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/state/AuthActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="shadow-md w-full bg-gray-900 top-0 left-0 font-serif">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1713022033/logoGif_dfhze4.gif"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Asistencia Facial
      </span>
    </a>
    <div className="flex items-center">
      {user && (
        <button
          onClick={handleLogout}
          className="py-2 px-4 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Salir
        </button>
      )}
    </div>
  </div>
</nav>

  );
};

export default NavBar;
