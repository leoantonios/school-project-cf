import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../backend/supabase";
import useUserStatus from "../state/user-status";

export default function Botones({ estado }: any) {
    const { setEstaLogueado } = useUserStatus();

    const navigate = useNavigate();

    const signOut = () =>{
      supabase.auth.signOut()
      navigate("/");
      setEstaLogueado();
    }


  if (estado) {
    return (
      <>
        <button
          className="btn bg-purple-500 hover:bg-indigo-700 border-none text-white py-3.5 px-4 h-auto min-h-min capitalize tracking-wider"
          onClick={signOut}
        >
          Cerrar Sesion
        </button>
      </>
    );
  } else {
    return (
      <>
        <Link
          className="text-purple-500 hover:text-indigo-700 cursor-pointer py-3 px-4 capitalize tracking-wider font-semibold"
          to="/register"
        >
          Registrate
        </Link>
        <Link
          className="btn bg-purple-500 hover:bg-indigo-700 border-none text-white py-3.5 px-4 h-auto min-h-min capitalize tracking-wider"
          to="/login"
        >
          Iniciar Sesion
        </Link>
      </>
    );
  }
}
