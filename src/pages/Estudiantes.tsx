import { useNavigate } from "react-router-dom";
import useUserStatus from "../state/user-status";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  level: string;
  degree: string;
};

export default function Estudiantes() {
  const { estaLogueado } = useUserStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!estaLogueado) {
      navigate("/");
    }
  }, [estaLogueado]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitNewStudent: SubmitHandler<Inputs> = async ({
    name,
    level,
    degree,
  }) => {
    try {
      console.log(name);
      console.log(degree);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <div className="bg-gray-100 p-4">
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold text-center block">
            Estudiantes 👨‍🎓
          </h1>
          <form onSubmit={handleSubmit(onSubmitNewStudent)}>
            <div>
              <p className=" text-center mb-4 cursor-pointer text-black">---</p>
            </div>
            <div className="space-y-4">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Nombre del Estudiante"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
              />
              {errors.name && (
                <span className="text-purple-500">El nombre es requerido</span>
              )}
              <select
                {...register("level", { required: true })}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
              >
                <option value="">Seleccionar...</option>
                <option value="primaria">Primaria</option>
                <option value="secundaria">Secundaria</option>
              </select>
              {errors.degree && (
                <span className="text-purple-500">El nivel es requerido</span>
              )}
              <select
                {...register("degree", { required: true })}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
              >
                <option value="">Seleccionar...</option>
                <option value="1er">1er Grado</option>
                <option value="2do">2do Grado</option>
                <option value="3ro">3ro Grado</option>
                <option value="4to">4to Grado</option>
                <option value="5to">5to Grado</option>
                <option value="6to">6to Grado</option>
              </select>
              {errors.degree && (
                <span className="text-purple-500">El grado es requerido</span>
              )}
            </div>
            <div className="text-center mt-6">
              <input
                type="submit"
                className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all"
                value="Crear Estudiante"
              />
            </div>
          </form>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-purple-400 text-white">
                  <th></th>
                  <th>Nombre</th>
                  <th>Nivel</th>
                  <th>Grado</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
