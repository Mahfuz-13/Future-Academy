import React, { useEffect, useState } from "react";
import HomeData from "../HomeData/HomeData";
// Importing css file
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/FakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="home-header">
        <h1 className="greeting">
          Welcome to <span className="home-text"> Future Academy</span>
        </h1>
        <div className="home-container">
          <h3>
            The brighter you are
            <br />
            <span className="home-text">the more you have to learn</span>
          </h3>
          <img src="learning img.jpg" alt="" />
        </div>
        <br />
        <h4>
          Our mission is to provide a world-class education to anyone, anywhere.
        </h4>
      </div>
      <h3>Our Services</h3>
      <div className="course-container">
        {courses.slice(0, 4).map((course) => (
          <HomeData key={course.id} course={course}></HomeData>
        ))}
      </div>
    </div>
  );
};

export default Home;
