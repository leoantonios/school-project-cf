import { useNavigate } from "react-router-dom";
import useUserStatus from "../state/user-status";
import { useEffect } from "react";
import StudentsForm from '../components/StudentsForm';
import StudentsTable from '../components/StudentsTable';


export default function Estudiantes() {
  const { estaLogueado } = useUserStatus();
  const navigate = useNavigate();

  useEffect(() => {

    if (!estaLogueado) {
      navigate("/");
    }
  }, [estaLogueado]);



  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div className="bg-gray-100 p-4">
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold text-center block">
            Estudiantes 👨‍🎓
          </h1>
          <StudentsForm/>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="overflow-x-auto">
            <StudentsTable/>
          </div>
        </div>
      </div>
    </>
  );
}
