import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StudentDetailsPage.css";

function StudentDetailsPage({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = useMemo(
    () => students.find((item) => item.id === Number(id)),
    [id, students]
  );

  if (!student) {
    return (
      <div className="student-details-page">
        <h1>Student Details</h1>
        <p>Student not found.</p>
        <button onClick={() => navigate("/students")}>Back to Students</button>
      </div>
    );
  }

  return (
    <div className="student-details-page">
      <h1>Student Details</h1>

      <div className="student-details-card">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <p>
          <strong>School Year:</strong> {student.grade}
        </p>
        <p>
          <strong>Status:</strong> {student.status}
        </p>
      </div>

      <div className="student-notes">
        <h3>Notes / Description</h3>
        <p>
          {student.notes ||
            `${student.name} is currently enrolled in ${student.grade} with status ${student.status}.`}
        </p>
      </div>

      <button onClick={() => navigate("/students")}>Back to Students</button>
    </div>
  );
}

export default StudentDetailsPage;
