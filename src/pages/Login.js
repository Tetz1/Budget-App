import { useState } from 'react';
import Axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Login = () => {

    const navigate = useNavigate();
    const callLogin = "https://budgetapp.digitalcube.rs/api/tenants/6c931dbf-ae44-4e90-9d7b-537ec6cea122/session"

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async event => {
        event.preventDefault();

        fetch(callLogin, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const token = data.token;
            localStorage.setItem("user", token);
            navigate("/", {replace: true});
        })
        .catch((error) => {
            if (!error.response) {
                setErrorMsg("No Server Response");
            } else if (error.response?.status === 400) {
                setErrorMsg("Missing username or password");
            } else if (error.response?.status === 401) {
                setErrorMsg("Wrong username or password")
            } else {
                setErrorMsg("Login failed");
            }
            alert(errorMsg);
            console.log(error);
        });
        
        
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <div><LoginRegisterNav /></div>
            <div className="heading"><b>Log in</b></div>
            <div className="info">Please log in to continue</div>

            <form onSubmit={handleLogin}>
                <input className="login__input" type="text" placeholder="Username*" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
                <input className="login__input" type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <div className="forgotPassword">
                    <a href="">Forgot password?</a>
                </div><br/>
                <input className="submitBtn" type="submit" value="Log in" />
            </form>
            
            <div className="noAccount">
                Don't have an account? <a href="/register">Sign up</a>
            </div>
        </div>
    )
};

export default Login;