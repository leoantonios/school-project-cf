import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>

        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-black">
              Inicia Sesión
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              ¡Ingrese sus creedenciales!
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
            />
          </div>
          <div className="text-center mt-6">
            <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
              Ingresar
            </button>
            <p className="mt-4 text-sm">
                Quiere una Cuenta?{" "}
              <Link className="underline  cursor-pointer" to="/"> Registrate</Link>
            </p>
          </div>
        </div>

    </>
  );
}
