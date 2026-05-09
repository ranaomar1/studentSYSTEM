import { useNavigate } from "react-router-dom";
import "./StudentsPage.css";

function StudentsPage({ students, onDeleteStudent }) {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <div className="students-page">
      <h1 className="students-title">Students</h1>

      <div className="students-grid">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p>
              <strong>Age:</strong> {student.age}
            </p>
            <p>
              <strong>School Year:</strong> {student.grade}
            </p>
            <p>
              <strong>Status:</strong> {student.status}
            </p>

            <div className="student-actions">
              <button onClick={() => handleViewDetails(student.id)}>View Details</button>
              <button
                className="delete-button"
                onClick={() => onDeleteStudent(student.id)}
              >
                Delete Student
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPage;
