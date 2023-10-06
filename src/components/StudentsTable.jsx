import { memo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const StudentsTable = memo(({ students, editStudent, deleteStudent }) => {
  console.log("StudentsTable");

  const handleDelete = (id) => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));

    const updatedStudents = storedStudents.filter(
      (student) => student.id !== id
    );

    localStorage.setItem("students", JSON.stringify(updatedStudents));

    deleteStudent(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Group</th>
          <th className="text-end">Description</th>
          <th>Edit and Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ firstName, lastName, age, group, comment, id }, i) => (
          <tr key={id}>
            <td>{i + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{group}</td>
            <td>{comment}</td>
            <td className="text-end">
              <button
                className="btn btn-primary me-3"
                onClick={() => editStudent(id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

StudentsTable.propTypes = {
  students: PropTypes.array,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
};

StudentsTable.displayName = "StudentsTable";

export default StudentsTable;
