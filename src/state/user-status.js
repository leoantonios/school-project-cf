import { create } from "zustand";
import { supabase } from "../backend/supabase";

const useUserStatus = create((set) =>({

    estaLogueado: false,
    setEstaLogueado: async() => {

        let { data: { user } } = await supabase.auth.getUser();
        if (user) {
            set(()=>({
                estaLogueado: true
            }))

        }else{
            set(()=>({
                estaLogueado: false
            }))
        }


    }

}));

export default useUserStatus;