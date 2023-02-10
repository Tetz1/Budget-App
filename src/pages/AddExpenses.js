import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';

import { MdArrowBackIosNew } from "react-icons/md";
import { MdFastfood } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { GiTakeMyMoney } from 'react-icons/gi';

import Slider from '@mui/material/Slider';

import './AddExpenses.css';
import { fontSize } from '@mui/system';

const AddExpenses = () => {

    const navigate = useNavigate();
    const userToken = localStorage.getItem("user");
    const callAddTransaction = "https://budgetapp.digitalcube.rs/api/transactions"


    const CreateExpense = (amount, description) => {
        fetch(callAddTransaction, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`
            },
            body: JSON.stringify({
                "amount": amount,
                "category": enteredCategory,
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
    }

    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredImportancy, setEnteredImportancy] = useState("Medium");

    const amountInputRef = useRef();
    const descriptionInputRef = useRef();

    const marks = [
        {
          value: 2,
          label: "Low",
        },
        {
          value: 4,
          label: "Medium",
        },
        {
          value: 6,
          label: "High",
        }
    ];

    function valuetext(value) {
        return `${value}`;
    };
      
    function valueLabelFormat(label) {
        return marks.findIndex((mark) => mark.label === marks.label);
    };

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.id);
    };

    let importancyLevel = 4;
    let importancy;
    const importancyChangeHandler = (event) => {
        importancyLevel = event.target.value;
        switch (importancyLevel) {
            case 2: 
                importancy = "Low";
                break;
            case 4: 
                importancy = "Medium";
                break;
            case 6: 
                importancy = "High";
                break;
        }
        setEnteredImportancy(importancy);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredAmount = amountInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        CreateExpense(enteredAmount, enteredDescription);

        /*
        const expenseData = {
            id: Math.random(),
            date: new Date(),
            amount: enteredAmount,
            description: enteredDescription,
            category: enteredCategory,
            importancy: enteredImportancy
        };

        props.onSaveExpenseData(expenseData);
        */
        amountInputRef.current.value = "";
        descriptionInputRef.current.value = "";
        navigate("/expenses", {replace: true});
    };
    

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
            <div className="grid-container-addExpense">
                <div><img src="." alt="Logo" /></div>
                <div className="grid-container">
                    <div>
                    <Link className="goBack" to="/expenses">
                        <MdArrowBackIosNew />
                    </Link>
                    </div>
                    <div className="head">Add expenses</div>
                    <div></div>
                </div>
                <form className="addExpense_form-grid" onSubmit={submitHandler}>
                    <div>
                        <input
                            className="text_field"
                            type="number"
                            placeholder="Enter amount here"
                            min={0.01}
                            step={0.01}
                            ref={amountInputRef}
                            required
                        />
                        <input
                            className="text_field"
                            type="text"
                            placeholder="Enter description"
                            maxLength={75}
                            ref={descriptionInputRef}
                            required
                        />
                    </div>
                    <div>
                        <div>
                            <div className="txt-form_titles">Choose category</div>
                        </div>
                        <div className="grid-radio_category">
                            <div className="icon-format">
                                <MdFastfood className="icon_food"/>
                            </div>
                            <div className="category_and_description">
                                <label className="category-lbl" for="food">Food</label>
                                <div className="description_radio">Restaurants, supermarkets...</div>
                            </div>
                            <input className="radio_btn" type="radio" id="783cd8bf-5d2a-4159-b889-4980601e4d37" name="category" value="Food" onChange={categoryChangeHandler} />
                            
                            <div className="icon-format">
                                <RiBillFill className="icon_bills"/>
                            </div>
                            <div className="category_and_description">
                                <label className="category-lbl" for="bills">Bills</label>
                                <div className="description_radio">House, company, medical...</div>
                            </div>
                            <input className="radio_btn" type="radio" id="f51559db-61f4-4432-b8ad-660b58cb5d0c" name="category" value="Bills" onChange={categoryChangeHandler} />

                            <div className="icon-format">
                                <BiDrink className="icon_leisure" />
                            </div>
                            <div className="category_and_description">
                                <label className="category-lbl" for="leisure">Leisure</label>
                                <div className="description_radio">Drinks, Travel, hobbies...</div>
                            </div>
                            <input className="radio_btn" type="radio" id="8699d2dd-7e37-4a54-9411-1ff0433ce782" name="category" value="Leisure" onChange={categoryChangeHandler} />

                            <div className="icon-format">
                                <GiTakeMyMoney className="icon_debts" />
                            </div>
                            <div className="category_and_description">
                                <label className="category-lbl" for="debts">Debts</label>
                                <div className="description_radio">Student loan, mortgage, car loan...</div>
                            </div>
                            <input className="radio_btn" type="radio" id="f9686fe2-0528-42ee-b882-9b6bb6a85048" name="category" value="Debts" onChange={categoryChangeHandler} />
                        </div>
                    </div>
                    <div>
                        <div className="txt-form_titles">
                            Choose importance
                        </div>
                        <div className="slider-importancy">
                            <Slider
                                aria-label="Restricted values"
                                defaultValue={4}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                step={null}
                                valueLabelDisplay={marks.label}
                                marks={marks}
                                max={7}
                                min={1}
                                onChange={importancyChangeHandler}
                                className="slider"
                            />
                        </div>
                    </div>
                    <button className="addExpense_btn" type="submit">Add</button>
                </form>
            </div>
        );
    };


    return (
        ProtectedPage()
    );
};

export default AddExpenses;