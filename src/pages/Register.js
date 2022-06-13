import { useState, ReactDOM } from 'react';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        let registerData = {name, email, password};
        
        let result = fetch("https://budgetapp.digitalcube.rs/api/tenants/__IDTENANT__/users", {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        result = result.json();
        console.log("result", result);
    }

    return (
        <div>
            <div><LoginRegisterNav /></div>
            <div className="heading"><b>Sign up</b></div>
            <div className="info">To join the Budget app community</div>

            <form onSubmit={handleLogin}>
                <input className="login__input" type="text" placeholder="Full Name*" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <input className="login__input" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <input className="login__input last_input" type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                <input className="submitBtn" type="submit" value="Sign up" />
            </form>
            
            <div className="noAccount">
                Already have an account? <a href="/login">Log in</a>
            </div>
        </div>
    )
  };
  
  export default Register;