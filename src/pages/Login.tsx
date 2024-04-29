import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../backend/supabase";
import { Link, useNavigate } from "react-router-dom";
import useUserStatus from "../state/user-status";
import { toast } from "sonner";
import { useEffect } from "react";


type Inputs = {
  email: string;
  password: string;
};

export default function Login() {

  const {estaLogueado, setEstaLogueado } = useUserStatus();

  const navigate = useNavigate();
  useEffect(()=>{

    if (estaLogueado) {
      navigate("/panel");
    }

  },[estaLogueado]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async({email,password}) => {

    try {
      let { data } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (data?.user) {
        navigate("/panel");
        setEstaLogueado();
        toast.success('Inicio sesion correctamente')
        // console.log(data);
      }else{
        toast.error('Sus credenciales no son correctas')
      }

    } catch (error) {
      console.error(error)
    }

  };

  return (
    <>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-black">
              Inicia Sesión
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              ¡Ingrese sus credenciales!
            </p>
          </div>
          <div className="space-y-4">
            <input
              {...register("email", {required:true})}
              type="text"
              placeholder="user@example.com"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
            />
            {errors.email && <span className="text-purple-500">El correo es requerido</span>}
            <input
              {...register("password", {required:true})}
              type="password"
              placeholder="*******"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500 bg-slate-100"
            />
            {errors.password && <span className="text-purple-500">La contraseña es requerida</span>}
          </div>
          <div className="text-center mt-6">
            <input type="submit" className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all" />
            <p className="mt-4 text-sm">
                Quiere una Cuenta?{" "}
              <Link className="underline  cursor-pointer" to="/register"> Registrate</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
