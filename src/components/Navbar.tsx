import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-200 px-5 py-5 mt-7 rounded-md relative z-10">
        <div className="navbar-start lg:w-auto">
          <Link className="font-bold text-2xl pb-1 pr-4 text-gray-900 cursor-pointer" to="/">
            School
          </Link>
        </div>
        <div className="navbar-center lg:w-1/2 hidden lg:flex text-gray-500 font-medium">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-purple-500">About</a>
            </li>

            <li>
              <a className="hover:text-purple-500">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">

          <Link className="text-purple-500 hover:text-indigo-700 cursor-pointer py-3 px-4 capitalize tracking-wider font-semibold" to="/">Registrate</Link>
          <Link className="btn bg-purple-500 hover:bg-indigo-700 border-none text-white py-3.5 px-4 h-auto min-h-min capitalize tracking-wider" to="/login">
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
