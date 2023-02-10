import { useState } from 'react';

import LoginRegisterNav from '../components/LoginRegisterNav';
import "./loginRegister.css";

const Register = () => {

    const call = "https://budgetapp.digitalcube.rs/api/tenants/6c931dbf-ae44-4e90-9d7b-537ec6cea122/users";

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        fetch(call, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    "username": username,
                    "password": password
                })
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div><LoginRegisterNav /></div>
            <div className="heading"><b>Sign up</b></div>
            <div className="info">To join the Budget app community</div>

            <form onSubmit={handleLogin}>
                <input className="login__input" type="text" placeholder="Full Name*" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <input className="login__input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
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