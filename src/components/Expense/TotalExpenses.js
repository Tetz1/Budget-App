import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './TotalExpenses.css';

const TotalExpenses = (props) => {

    const [totalExpenses, setTotalExpenses] = useState();

    const userToken = localStorage.getItem("user");
    const callFetchData = "https://budgetapp.digitalcube.rs/api/transactions/statistics?year="+new Date().getFullYear()+"&month="+props.filteredMonth;


    useEffect(() => {
        const FetchTotalExpenses = () => {
            fetch(callFetchData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setTotalExpenses(data.outcome);
            })
            .catch(error => {
                console.error(error);
            })
        }
        FetchTotalExpenses();
    }, [props.filteredMonth])



    return (
        <div className="card_expense">
            <div></div>
            <div className="box box1">
                <div className="label">Expenses</div>
                <div className="amount_expense">€{totalExpenses}</div>
            </div>
            <div></div>
            <div className="box box2">
                <Link to="/expenses/add" className="btn_addExpense">
                    <AiOutlinePlusCircle />
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default TotalExpenses;