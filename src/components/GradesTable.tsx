import { useEffect } from "react";
import useGradesData from "../state/grades-data";
import GradesTableRow from "./GradesTableRow";

export default function GradesTable() {
  const { grades, getGrades } = useGradesData();

  useEffect(() => {
    getGrades();
  }, []);

  return (
    <>

      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-purple-400 text-white">
            <th>N</th>
            <th>NOMBRE</th>
            <th>NIVEL</th>
            <th>GRADO</th>
            <th>CURSO</th>
            <th>NOTA 1</th>
            <th>NOTA 2</th>
            <th>NOTA 3</th>
            <th>NOTA 4</th>
            <th>NOTA 5</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade: any, index: number) => (
            <GradesTableRow key={grade.id} grade={grade} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}
