import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/Authstyle.css";
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/login',
                { email, password, }
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/');
                navigate(location.state || '/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');

        }
    };
    return (
        <div>
        <Header />
        <div title='Resume Builder App'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Login Form </h4>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder='Enter your Email'
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => SetPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter Password'
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">SIGN</button>
                    <div className="form-links">
                    <Link to="/Reset" className="form-link">Forgot Password?</Link>
                    <Link to="/Register" className="form-link"><u>Create New Account</u></Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Login;