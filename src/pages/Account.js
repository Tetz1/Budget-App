import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Account() {
  
    const call = "https://budgetapp.digitalcube.rs/api/tenants/6c931dbf-ae44-4e90-9d7b-537ec6cea122/sessions";
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