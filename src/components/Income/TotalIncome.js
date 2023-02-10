import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './TotalIncome.css';

const TotalIncome = (props) => {

    const [totalIncomes, setTotalIncomes] = useState();
    const userToken = localStorage.getItem("user");
    const callFetchData = "https://budgetapp.digitalcube.rs/api/transactions/statistics?year="+new Date().getFullYear()+"&month="+props.filteredMonth;

    const FetchTotalIncomes = () => {
        fetch(callFetchData, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setTotalIncomes(data.income);
        })
        .catch(error => {
            console.error(error);
        })
    }

    useEffect(() => {
        FetchTotalIncomes();
    })

    return (
        <div className="card_income">
            <div></div>
            <div className="box box1">
                <div className="label">Income</div>
                <div className="amount_income2">€{totalIncomes}</div>
            </div>
            <div></div>
            <div className="box box2">
                <Link to="/income/add" className="btn_addIncome">
                    <AiOutlinePlusCircle />
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default TotalIncome;