import React from 'react';
import '../Body.css';
import learnimg from './learnimg.jpg';
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa';

const Body = () => {
  const navigate = useNavigate(); 
  const reviews = [
    {
      name: 'John Doe',
      course: 'Full Stack Development',
      review: 'This course helped me land my dream job! The instructors were knowledgeable and supportive.',
    },
    {
      name: 'Jane Smith',
      course: 'Data Science',
      review: 'The hands-on projects were invaluable. I learned so much and felt prepared to enter the workforce.',
    },
    {
      name: 'Mark Johnson',
      course: 'UI/UX Design',
      review: 'Great course with practical examples. The design concepts were explained clearly and effectively.',
    },
    {
      name: 'Emily Davis',
      course: 'Cloud Computing',
      review: 'The course content was up-to-date and relevant. I highly recommend it to anyone looking to advance their career in cloud technologies.',
    },
  ];

  return (
    <div className="body">
     <section className="image-section">
        <div className="image-container">
          <img src={learnimg} alt="Attractive Visual" className="attractive-image" />
        </div>
      </section>
      <div className="get-started">
        <h1>Welcome to Gnyaan</h1>
        <p>Start your learning journey with us!</p>
        <button className="get-started-button" onClick={()=>navigate('/login')}>Get Started</button>
      </div>

      <div className="reviews-section">
        <h2>What Our Students Say</h2>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.name}</h3>
              <h4>{review.course}</h4>
              <p>"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="working-process">
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">
            <FaCheckCircle className="step-icon" />
            <h4>Find Your Course</h4>
            <p>Browse through our wide range of courses and find the one that suits your needs.</p>
          </div>
          <div className="step">
            <FaCheckCircle className="step-icon" />
            <h4>Book Your Seat</h4>
            <p>Reserve your spot in the course that interests you and get ready to start learning.</p>
          </div>
          <div className="step">
            <FaCheckCircle className="step-icon" />
            <h4>Get Certified</h4>
            <p>Complete the course and earn your certification to showcase your new skills to the world.</p>
          </div>
        </div>
      </div>

      <div className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefits-list">
          <div className="benefit">
            <FaCheckCircle className="benefit-icon" />
            <p>Expert Instructors</p>
          </div>
          <div className="benefit">
            <FaCheckCircle className="benefit-icon" />
            <p>Comprehensive Materials</p>
          </div>
          <div className="benefit">
            <FaCheckCircle className="benefit-icon" />
            <p>Flexible Scheduling</p>
          </div>
          <div className="benefit">
            <FaCheckCircle className="benefit-icon" />
            <p>Certification Upon Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
