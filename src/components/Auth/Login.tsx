import React, { useState } from 'react';
import './Login.scss';
import Logo from '../../asset/Group.svg';
import Hero from '../../asset/pablo-sign-in 1 (1).svg';
import { Button } from '@mui/material';
import {useNavigate, NavLink} from "react-router-dom";



interface ILogin {
    email: string;
    password: string;
}

function Login() {
    const initialLoginData: ILogin = {
        email: '',
        password: '',
    };

    const [data, setData] = useState<ILogin>(initialLoginData);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Login submitted:', data);

        if (data.email === 'lendsqr@email.com' && data.password === 'lendsqr123') {
            console.log('Login successful');
            navigate("/dashboard")
        } else {
            console.log('Login failed');
            setIsLoginFailed(true);
        }
    };

    return (
        <div className="main">
            <div className="left">
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="hero">
                    <img src={Hero} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="sub_right">
                    <div className="message">
                        <h2>Welcome!</h2>
                    </div>
                    <div className="content">
                        <p>Enter details to login</p>
                    </div>
                    <div className="form">
                        <div className="input_form">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="password_input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                style={{ borderColor: isLoginFailed ? 'red' : 'inherit' }}
                            />
                            <Button
                                variant="text"
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="show-button"
                            >
                                SHOW
                            </Button>
                        </div>
                    </div>
                    <div className="forget_link">
                        <a>FORGET PASSWORD?</a>
                    </div>
                </div>
                <div className="login_btn">
                    <Button variant="contained" onClick={handleSubmit} style={{width: "470px", height: "48px",   borderRadius: "8px"}}>
                        LOGIN
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
