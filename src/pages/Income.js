import { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TotalIncome from "../components/Income/TotalIncome";
import DateSelector from "../components/DateSelector";
import IncomeHistory from "../components/Income/IncomeHistory";

import './Income.css';

const Income = ({incomes}) => {

    const userToken = localStorage.getItem("user");
    const [listOfIncomes, setListOfIncomes] = useState();

    
    useEffect(() => {
        const callFetchData = "https://budgetapp.digitalcube.rs/api/transactions"

        const FetchData = () => {
            fetch(callFetchData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            .then(response => response.json())
            .then(data => {
                const transactions = data.transactions;
            })
            .catch(error => {
                console.error(error);
            })
        };
        FetchData();
    })

    const currMonth = new Date().getMonth() + 1;
    const [filteredMonth, setFilteredMonth] = useState(currMonth);


    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
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
            <div className="content_incomes-grid">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <div className="cont">
                    <TotalIncome filteredMonth={filteredMonth} />
                    <div className="date-margin">
                        <DateSelector onFilteredMonth={filteredMonthHandler} />
                    </div>
                </div>
                <div className="history_text">History</div>
                <div className="history-container">
                    <IncomeHistory monthFilter={filteredMonth} />
                </div>
            </div>
        );
    };

    return (
        ProtectedPage()
    );
};

export default Income;