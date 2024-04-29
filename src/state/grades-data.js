import { create } from "zustand";
import { supabase } from "../backend/supabase";
import { toast } from "sonner";

const useGradesData = create((set) => ({
  grades: [],
  searchingStatus: false,
  getGrades: async (status = true, level = "", degree = "", course = "") => {
    try {

        set((state) => ({
            searchingStatus: true
        }));

      let {
        data: { user },
      } = await supabase.auth.getUser();

      let query = supabase.from("grades").select().eq("status", status).eq("userId", user.id);

      if (level) {
        query.eq("level", level);
      }

      if (degree) {
        query.eq("degree", degree);
      }

      if (course) {
        query.eq("course", course);
      }

      query.order("name", { ascending: true });

      let { data, error } = await query;

      if (error) throw error;

      set(() => ({
        grades: data,
      }));
    } catch (error) {
      console.error(error);
    }finally{
        set((state) => ({
            searchingStatus: false
        }));
    }

  },
  updateGrade: async(id,notas)=>{
    try {
        const { data: { user } } = await supabase.auth.getUser();
        const { error , data } = await supabase
            .from('grades')
            .update(notas)
            .eq("userId",user.id)
            .eq("id",id)
            .select();

        if (error) throw error;

        if (data) {

            toast.success('La calificacion se actualizo correctamente');

        } else {
            toast.error('Ups! Hubo un problema en la operacion');
        }



    } catch (error) {
        console.error(error);
    }
  }

}));

export default useGradesData;
