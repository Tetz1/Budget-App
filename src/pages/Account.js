import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Account() {
  
    const call = "https://budgetapp.digitalcube.rs/api/tenants/ac56b8b9-3bdc-429f-ab64-7aedd16d8d25/sessions";
    const userToken = localStorage.getItem("user");

    const navigate = useNavigate();
    const logout = async () => {
        try {
            const response = await fetch(call, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                }
            })
        } catch (error) {
            console.log(error);
        }
        
        localStorage.clear();
        navigate("/login");
    }
  
    return (
    <div>
        <button onClick={logout}>Log out</button>
    </div>
  )
}