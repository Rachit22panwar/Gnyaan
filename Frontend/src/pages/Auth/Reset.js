import React, { useState } from 'react';
import "../../styles/Reset.css";
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div>
    <Header />
    <div className="reset-container">
      <h2 className="reset-title">Reset Your Password</h2>
      <form className="reset-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="reset-label" > Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your Email'
          required
          className="reset-input"
        />
        <button type="submit" className="reset-button">Send Reset Link</button>
        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Reset;
