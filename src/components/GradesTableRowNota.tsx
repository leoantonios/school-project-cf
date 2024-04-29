import { useState } from "react";
import useGradesData from "../state/grades-data";


export default function GradesTableRowNota({numberGrade, grade, gradeValue}:any) {
  const { updateGrade } = useGradesData();
    const [gradeValueForm, setGradeValueForm] = useState(gradeValue)

  const onSubmitNotas = async (e:any) => {

    setGradeValueForm(e.target.value);

    console.log(e.target.value);

    if (e.target.value.trim().length > 1){

        updateGrade(grade.id, {
            [numberGrade]: e.target.value
        })
    }




  };
  return (
    <>

        <input type="number"className="block text-black bg-slate-200 border-1 w-[90px]"
            value={gradeValueForm}
          onChange={onSubmitNotas}
        />


    </>
  );
}
