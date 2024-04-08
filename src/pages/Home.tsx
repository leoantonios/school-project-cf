import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <span className="text-lg text-purple-500 font-medium block mb-3">
            School Project
          </span>
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">
          Herramienta digital para un seguimiento de tus calificaciones! 📝
          </h1>
          <p className="py-6 px-5 md:px-16 text-xl">
            Registrese e ingrese
          </p>
          <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">

            <Link to="/login" className="btn btn-primary border-none bg-purple-500 hover:bg-indigo-700 normal-case px-6 text-base tracking-wider text-white">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
