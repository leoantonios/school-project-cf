import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStatus from '../state/user-status';
import estudiantesImg from '../assets/estudiantes.png';
import registrosImg from '../assets/registros.png';

const Panel = () => {

  const {estaLogueado } = useUserStatus();

  const navigate = useNavigate();
  useEffect(()=>{

    if (!estaLogueado) {
      navigate("/");
    }

  },[estaLogueado]);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-2">
        <div className="bg-gray-100 p-4">
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img
                src={estudiantesImg}
                alt="Estudiantes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Estudiantes 👨‍🎓</h2>
              <p>Registra a tus estudiantes, para luego poner la calificacion.</p>
              <div className="card-actions justify-end">
                <Link to="/estudiantes" className="btn btn-primary text-white">Ingresar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img
                src={registrosImg}
                alt="Registros"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Registros 📝</h2>
              <p>Ingresa aqui para rellenar los registros de notas de los estudiantes.</p>
              <div className="card-actions justify-end">
                <Link to="/registros" className="btn btn-primary text-white">Ingresar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
