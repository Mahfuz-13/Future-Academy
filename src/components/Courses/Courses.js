import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
// Importing css file
import "./Courses.css";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/FakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1 className="course-text">All Our Courses</h1>
      <div className="course-container">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
