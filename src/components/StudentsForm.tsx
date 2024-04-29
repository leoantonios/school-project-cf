import { SubmitHandler, useForm } from "react-hook-form";
import useStudentsData from "../state/students-data";


type Inputs = {
  name: string;
  level: string;
  degree: string;
};

export default function StudentsForm() {

  const {createStudent, addingStatus} = useStudentsData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const onSubmitNewStudent: SubmitHandler<Inputs> = async ({
    name,
    level,
    degree,
  }) => {
    createStudent(name,level,degree);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitNewStudent)}>
      <div>
        <p className=" text-center mb-4 cursor-pointer text-black">Registrar</p>
      </div>
      <div className="space-y-4">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Nombre del Estudiante"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
        />
        {errors.name && (
          <span className="text-purple-500">El nombre es requerido</span>
        )}
        <select
          {...register("level", { required: true })}
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
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
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
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

        {addingStatus ?  "Creando Estudiante" : <input
          type="submit"
          className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all"
          value="Crear Estudiante"
        />}
      </div>
    </form>
  );
}
