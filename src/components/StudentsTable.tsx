import { useEffect, useState } from "react";
import useStudentsData from "../state/students-data";
import StudentTableRow from "./StudentTableRow";

export default function StudentsTable() {
  const { students, getStudents } = useStudentsData();
  const [showStatus, setShowStatus] = useState(true)

  useEffect(() => {
    getStudents(showStatus);
  }, [showStatus]);

  return (
    <>
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text text-black"><b>Estado Estudiante:</b> Activo {showStatus ? "Si" : "No"} </span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" onClick={()=>setShowStatus(!showStatus)}/>
        </label>
        </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-purple-400 text-white">
            <th>N</th>
            <th>NOMBRE</th>
            <th>NIVEL</th>
            <th>GRADO</th>
            <th>OPERACIONES</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any, index: number) => (
            <StudentTableRow key={student.id} student={student} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}
