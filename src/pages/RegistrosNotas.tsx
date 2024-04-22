import { useNavigate } from "react-router-dom";
import useUserStatus from "../state/user-status";
import { useEffect } from "react";

export default function RegistrosNotas() {
  const { estaLogueado, setEstaLogueado } = useUserStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!estaLogueado) {
      navigate("/");
    }
  }, [estaLogueado]);

  return (
    <>
      <div className="hero-content text-center">
        <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">
          Registros 📝
        </h1>
      </div>
    </>
  );
}
