import './App.css';
import HeaderComp from './HeaderComp';
import { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StudentsPage from './StudentsPage';
import AddStudentPage from './AddStudentPage';
import StudentDetailsPage from './StudentDetailsPage';
import initialStudents from './students.json';
import schoolYears from './schoolYears';

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now(),
      age: Number(studentData.age),
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    
      <div className="App">
        <HeaderComp />

        
        {/* routes */}
        <Routes>
          {/* home page */}
          <Route
            path="/"
            element={
              <HomePage
                totalStudents={students.length}
                totalSchoolYears={schoolYears.length}
              />
            }
          />

        {/* students page */}
          <Route
            path='/students'
            element={
              <StudentsPage
                students={students}
                onDeleteStudent={handleDeleteStudent}
              />
            }
          />
          {/* add-student page */}
          <Route
            path='/add-student'
            element={<AddStudentPage onAddStudent={handleAddStudent} />}
          />
          {/* student/:id page*/}
          <Route
            path='/student/:id'
            element={<StudentDetailsPage students={students} />}
          />
        </Routes>

      </div>
    
  );
}

export default App;
