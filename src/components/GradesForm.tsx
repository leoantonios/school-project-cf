import { SubmitHandler, useForm } from "react-hook-form";
import useGradesData from "../state/grades-data";


type Inputs = {
  level: string;
  degree: string;
  course: string;
};

export default function GradesForm() {

  const {getGrades, searchingStatus} = useGradesData();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmitFilters: SubmitHandler<Inputs> = async ({
    level,
    degree,
    course,
  }) => {
    getGrades(true,level,degree,course);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFilters)}>
      <div>
        <p className=" text-center mb-4 cursor-pointer text-black">Filtros</p>
        <p>⚠ Para guardar notas menores a 10 por favor poner un 0 adelante</p>
        <br/>
      </div>
      <div className="space-y-4">

        <select
          {...register("level")}
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
        >
          <option value="">Seleccionar NIVEL...</option>
          <option value="primaria">Primaria</option>
          <option value="secundaria">Secundaria</option>
        </select>
        {errors.degree && (
          <span className="text-purple-500">El nivel es requerido</span>
        )}
        <select
          {...register("degree")}
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
        >
          <option value="">Seleccionar GRADO...</option>
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

        <select
          {...register("course")}
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100 text-black"
        >
          <option value="">Seleccionar CURSO...</option>
          <option value="MATEMATICA">MATEMATICA</option>
          <option value="COMUNICACION">COMUNICACION</option>
          <option value="ARTE">ARTE</option>
        </select>
        {errors.degree && (
          <span className="text-purple-500">El Curso es requerido</span>
        )}
      </div>
      <div className="text-center mt-6">

        {searchingStatus ?  "Buscando" : <input
          type="submit"
          className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all"
          value="Buscar Registros"
        />}
      </div>
    </form>
  );
}
