import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Botones from './Botones';
import useUserStatus from "../state/user-status";

const Navbar = () => {

  const {estaLogueado, setEstaLogueado } = useUserStatus();


  useEffect(()=>{

    setEstaLogueado();

  },[estaLogueado]);



  return (
    <>
      <div className="navbar bg-gray-200 px-5 py-5 mt-7 rounded-md relative z-10">
        <div className="navbar-start lg:w-auto">
          <Link className="font-bold text-2xl pb-1 pr-4 text-gray-900 cursor-pointer" to="/">
            School
          </Link>
        </div>
        <div className="navbar-center lg:w-1/2 hidden lg:flex text-gray-500 font-medium">
          <ul className="">
            {estaLogueado
              ? <Link to="/panel"><li className="btn  hover:bg-indigo-700 border-none text-white py-3.5 px-4 h-auto min-h-min capitalize tracking-wider">Panel de Control</li></Link>
              : <li></li>
            }

          </ul>
        </div>
        <div className="navbar-end">

          <Botones estado={estaLogueado}/>

        </div>
      </div>
    </>
  );
};

export default Navbar;
