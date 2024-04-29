import { useNavigate } from "react-router-dom";
import useUserStatus from "../state/user-status";
import { useEffect } from "react";
import GradesForm from "../components/GradesForm";
import GradesTable from "../components/GradesTable";

export default function RegistrosNotas() {
  const { estaLogueado, setEstaLogueado } = useUserStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!estaLogueado) {
      navigate("/");
    }
  }, [estaLogueado]);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">
          Registros 📝
        </h1>

      </div>

      <div className="text-center">
        <GradesForm/>
      </div>
      <br/>
      <div className="text-center">
      <GradesTable/>
      </div>
    </div>
  );
}
