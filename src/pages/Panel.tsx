import { Link } from 'react-router-dom';

const Panel = () => {


  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-2">
        <div className="bg-gray-100 p-4">
          <div className="card card-compact w-96 shadow-xl">
            <figure>
              <img
                src="../public/estudiantes.png"
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
                src="../public/registros.png"
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
