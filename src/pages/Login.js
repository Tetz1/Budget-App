import { useState } from 'react';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async e => {
        e.preventDefault();
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