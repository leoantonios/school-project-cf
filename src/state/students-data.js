import { create } from "zustand";
import { supabase } from "../backend/supabase";
import { toast } from "sonner";

const useStudentsData = create((set) =>({

    students : [],
    addingStatus: false,
    getStudents : async(status = true) => {
        let { data: { user } } = await supabase.auth.getUser();
        let {data, error} = await supabase
        .from('students')
        .select()
        .eq("userId",user.id)
        .eq("status",status)
        .order("name", {ascending: true})

        if (error) throw error;
        set(()=>({
            students: data
        }))
        // console.log("Consultando Estudiantes");
    },
    createStudent: async (name, level, degree) => {
        try {
            set((state) => ({
                addingStatus: true
            }));
            const user = await supabase.auth.getUser();
            const { data } = await supabase
                .from('students')
                .insert({
                    name,
                    level,
                    degree,
                    userId: user.data.user?.id
                })
                .select();

            if (data) {
                toast.success('El estudiante se creó correctamente');
                set((state) => ({
                    students: [...state.students, ...data].slice().sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();

                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    })
                }));
            } else {
                toast.error('Ups! Hubo un problema en la creación');
            }
        } catch (error) {
            console.error(error);
        } finally {
            set(() => ({
                addingStatus: false
            }));
        }
    },
    togleStudentStatus: async (id, status) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { error , data } = await supabase
                .from('students')
                .update({
                    status,
                })
                .eq("userId",user.id)
                .eq("id",id)
                .select();

            if (error) throw error;

            if (data) {
                set((state) => ({
                    students: [...state.students].filter(student => student.id != id)
                }));
                if (status) {
                    toast.success('El estudiante se Activo correctamente');
                }else{
                    toast.success('El estudiante se Desactivo correctamente');
                }

            } else {
                toast.error('Ups! Hubo un problema en la desactivacion');
            }
        } catch (error) {
            console.error(error);
        }
    },




}));

export default useStudentsData;