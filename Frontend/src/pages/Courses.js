import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css';
import fullstackimg from '../components/Layout/fullstackimg.png';
import datascienceimg from '../components/Layout/datascienceimg.jpg';
import uiuximg from '../components/Layout/uiuximg.jpg';
import cloudcomputimg from '../components/Layout/cloudcomputimg.webp';
import cybersecurityimg from '../components/Layout/cybersecurityimg.jpg';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      name: 'Full Stack Development',
      description: 'Master frontend and backend development with hands-on projects.',
      img: fullstackimg,
    },
    {
      name: 'Data Science',
      description: 'Learn data analysis, machine learning, and AI techniques.',
      img: datascienceimg,
    },
    {
      name: 'UI/UX Design',
      description: 'Design user-friendly and visually appealing interfaces.',
      img: uiuximg,
    },
    {
      name: 'Cloud Computing',
      description: 'Gain expertise in cloud platforms and services.',
      img: cloudcomputimg,
    },
    {
      name: 'Cybersecurity',
      description: 'Learn to protect systems and networks from cyber threats.',
      img: cybersecurityimg,
    },
  ];

  return (
    <div>
        <Header />
    <div className="courses-page">
      <h1>All Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img} alt={course.name} className="course-img" />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button className="enroll-button" onClick={() => navigate(`/courses/${index}`)}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
        </div>
  );
};

export default Courses;
