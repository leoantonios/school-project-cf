import useStudentsData from "../state/students-data";


export default function StudentTableRow({student, index}:any) {

    const {togleStudentStatus} = useStudentsData();

    const handleDelete = () =>{
        let texto = !student.status ? "Activar" : "Desactivar"

        if (confirm("Esta Seguro de "+texto+" al Usuario y sus Registros!")) {
            togleStudentStatus(student.id, !student.status)
          } else {
            alert("Cancelado");
          }

    }

  return (
    <tr key={student.id} className="text-black">
    <th>{index + 1}</th>
    <td>{student.name}</td>
    <td>{student.level}</td>
    <td>{student.degree}</td>
    <td><button onClick={handleDelete} className="btn py-0w-full py-2 text-white bg-purple-400  hover:bg-purple-500 transition-all border-0">{student.status ? "Desactivar" : "Activar"}</button></td>
    </tr>
  )
}
