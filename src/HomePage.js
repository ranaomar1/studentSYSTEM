import './App.css';
import CardComp from './CardComp';
import { useNavigate } from 'react-router-dom';


function HomePage({ totalStudents, totalSchoolYears }) {

  const navigate = useNavigate();

  const handleStudentsClick = () => {
    navigate('/students');
  };

  const handleAddStudentsClick = () => {
    navigate('/add-student');
  };


  return (
    <div className="home-page">
      <div className="home-cards-container">

        <CardComp
          title="Total Students"
          value={totalStudents}
        >
          <div className="home-card-actions">

            <button
              className="card-button"
              onClick={handleStudentsClick}
            >
              View Students
            </button>
            <button
              className="card-button"
              onClick={handleAddStudentsClick}
            >
              Add student
            </button>
          </div>
        </CardComp>

        <CardComp
          title="Number of School Years"
          value={totalSchoolYears}

        />

      </div>
    </div>

  );
}

export default HomePage;   