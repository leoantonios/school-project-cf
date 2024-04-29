import GradesTableRowNota from "./GradesTableRowNota";


export default function GradesTableRow({grade, index}:any) {




  return (
    <tr key={grade.id} className="text-black">
    <th>{index + 1}</th>
    <td>{grade.name}</td>
    <td>{grade.level}</td>
    <td>{grade.degree}</td>
    <td>{grade.course}</td>
    <td>{<GradesTableRowNota grade={grade} numberGrade={"grade1"} gradeValue={grade.grade1}/>} </td>
    <td>{<GradesTableRowNota grade={grade} numberGrade={"grade2"} gradeValue={grade.grade2}/>} </td>
    <td>{<GradesTableRowNota grade={grade} numberGrade={"grade3"} gradeValue={grade.grade3}/>} </td>
    <td>{<GradesTableRowNota grade={grade} numberGrade={"grade4"} gradeValue={grade.grade4}/>} </td>
    <td>{<GradesTableRowNota grade={grade} numberGrade={"grade5"} gradeValue={grade.grade5}/>} </td>

    </tr>
  )
}
