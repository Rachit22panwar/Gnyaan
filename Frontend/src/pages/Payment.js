import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/Payment.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    cardholderName: '',
    email: '',
    expiry: '',
    cvc: '',
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.cardholderName,
        email: formData.email,
      },
    });

    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      const response = await fetch("/api/v1/auth/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ amount: 50 }), // Pass the payment amount
      });

      const result = await response.json();
      if (result.success) {
        const { clientSecret } = result;

        const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (!stripeError) {
          setPaymentStatus("Payment successful!");
          setSuccess(true);
        } else {
          setPaymentStatus(`Payment failed: ${stripeError.message}`);
        }
      } else {
        setPaymentStatus(`Payment failed: ${result.message}`);
      }
    }
    
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="payment-page">
        <h1>Complete Your Payment</h1>
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <label>
            Cardholder Name
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <div className="card-details">
            <label>
              Expiry Date (MM/YY)
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              CVC
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Card Details
            <CardElement className="card-element" />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I accept the terms and conditions
          </label>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Payment Successful!</div>}
          {paymentStatus && <p className="payment-status">{paymentStatus}</p>}

          <button type="submit" className="pay-button" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
