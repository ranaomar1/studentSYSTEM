import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./AddStudentPage.css";
import schoolYears from "./schoolYears";



function AddStudentPage({ onAddStudent }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",

    age: "",

    grade: "",

    status: "",

  });

  const [errors, setErrors] = useState({});



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

  };



  const validateForm = () => {

    const newErrors = {};

    const ageValue = Number(formData.age);



    if (!formData.name.trim()) {

      newErrors.name = "Student name is required.";

    }



    if (!formData.age) {

      newErrors.age = "Age is required.";

    } else if (Number.isNaN(ageValue) || ageValue < 1 || ageValue > 100) {

      newErrors.age = "Age must be a number between 1 and 100.";

    }



    if (!formData.grade) {

      newErrors.grade = "School year is required.";

    }



    if (!formData.status) {

      newErrors.status = "Status is required.";

    }



    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateForm()) return;



    onAddStudent({

      name: formData.name.trim(),

      age: formData.age,

      grade: formData.grade,

      status: formData.status,

    });



    navigate("/students");

  };



  return (

    <div className="add-student-page">

      <h1>Add Student</h1>



      <form className="add-student-form" onSubmit={handleSubmit}>

        <label>

          Student Name

          <input

            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Enter student name"

          />

          {errors.name && <span className="error-text">{errors.name}</span>}

        </label>



        <label>

          Age

          <input

            type="number"

            name="age"

            value={formData.age}

            onChange={handleChange}

            placeholder="Enter age"

          />

          {errors.age && <span className="error-text">{errors.age}</span>}

        </label>



        <label>

          School Year

          <select name="grade" value={formData.grade} onChange={handleChange}>

            <option value="">Select school year</option>

            {schoolYears.map((year) => (

              <option key={year} value={year}>

                {year}

              </option>

            ))}

          </select>

          {errors.grade && <span className="error-text">{errors.grade}</span>}

        </label>



        <label>

          Status

          <select name="status" value={formData.status} onChange={handleChange}>

            <option value="">Select status</option>

            <option value="Active">Active</option>

            <option value="Inactive">Inactive</option>

          </select>

          {errors.status && <span className="error-text">{errors.status}</span>}

        </label>



        <button type="submit">Add Student</button>

      </form>

    </div>

  );

}



export default AddStudentPage;

