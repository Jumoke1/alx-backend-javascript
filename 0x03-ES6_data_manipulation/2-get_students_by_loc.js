//function defifnition
export default function getStudentsByLocation(students, city){
  return students.filer((student) => student.location === city);
}
