import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Login = (props) => {

    const navigate = useNavigate();
    const login_URL = "https://budgetapp.digitalcube.rs/api/tenants/ac56b8b9-3bdc-429f-ab64-7aedd16d8d25/sessions"

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async e => {
        e.preventDefault();

        try {
            const response = await Axios.post(login_URL, 
                JSON.stringify({username, password})
            )
            const {data} = response;

            localStorage.setItem("user", data.token);

            navigate("/", {replace: true});
        } catch (error) {
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
        }

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