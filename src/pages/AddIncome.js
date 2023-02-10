import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';

import { MdArrowBackIosNew } from "react-icons/md";

import './AddIncome.css';

const AddIncome = (props) => {

    const navigate = useNavigate();
    const userToken = localStorage.getItem("user");

    const amountInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        // Check if the Amount is a number and no Text
        const IsNumber = (input) => {
            return /^\d+$/.test(input);
        }

        if (IsNumber(enteredAmount)) {
            CreateSalary(enteredAmount, enteredDescription);
        } else {
            alert("Please enter an acceptable amount");
        }

        amountInputRef.current.value = "";
        descriptionInputRef.current.value = "";
    };


    const CreateSalary = (amount, description) => {
        const callAddTransaction = "https://budgetapp.digitalcube.rs/api/transactions"
        const category = "e5548520-24de-4646-8e94-2eb9f251dbee";

        fetch(callAddTransaction, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`
            },
            body: JSON.stringify({
                "amount": amount,
                "category": category,
                "currency": "EUR",
                "description": description
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok");
        })
        .catch(error => {
            console.error(error);
        })

        navigate("/income", {replace: true});
    }
    


    //Protected page, checks users token
    const ProtectedPage = () => {
        const [loading, setLoading] = useState(true);
        const [isTokenValid, setIsTokenValid] = useState(false);
        const navigate = useNavigate();
        const callUserCheck = "https://budgetapp.digitalcube.rs/api/tenants/6c931dbf-ae44-4e90-9d7b-537ec6cea122/session";

        
        useEffect(() => {
            if (!userToken) {
                return navigate('/login');
            } else {
                fetch(callUserCheck, {
                headers: {
                Authorization: `Bearer ${userToken}`
                }})
                .then(response => {
                    if (response.status === 200) {
                        setLoading(false);
                        setIsTokenValid(true);
                    } else {
                        return navigate('/login');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            }
        }, [navigate]);
        
        if (loading) {
            return <div>Loading...</div>;
        }
        
        if (!isTokenValid) {
            return <div>Unauthorized</div>;
        }
        
        return (
            <div className="grid-container-addIncome">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <div className="cont-grid">
                    <Link className="goBack" to="/income">
                        <MdArrowBackIosNew />
                    </Link>
                    <div className="head">Add incomes</div>
                </div>
                <form className="addIncome_form" onSubmit={submitHandler}>
                    <input
                        className="text_field"
                        type="text" 
                        placeholder="Enter amount here"
                        ref={amountInputRef}
                        required
                    /><br />
                    <input
                        className="text_field"
                        type="text"
                        placeholder="Enter description"
                        ref={descriptionInputRef}
                        required
                    /><br />
                    <div className="container-btn">
                        <button className="addIncome_btn" type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        ProtectedPage()
    );
};

export default AddIncome;