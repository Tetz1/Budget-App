import { useState, ReactDOM } from 'react';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        
        /*
        let logindata = {email, password};
        let result = fetch("https://budgetapp.digitalcube.rs/api/tenants/__IDTENANT__/sessions?", {
            method: "POST",
            headers: {},
            body: JSON.stringify(logindata)
        });
        result = result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        */
    }

    return (
        <div>
            <div><LoginRegisterNav /></div>
            <div className="heading"><b>Log in</b></div>
            <div className="info">Please log in to continue</div>

            <form onSubmit={handleLogin}>
                <input className="login__input" type="text" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
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