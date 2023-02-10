import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DateSelector from "../components/DateSelector";
import ExpenseHistory from '../components/Expense/ExpenseHistory';
import TotalExpenses from '../components/Expense/TotalExpenses';

import './Expenses.css';

const Expenses = () => {

    const userToken = localStorage.getItem("user");
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

    useEffect(() => {
        FetchData();
    })

    const currMonth = new Date().getMonth() + 1;
    const [filteredMonth, setFilteredMonth] = useState(currMonth);


    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };


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
            //listOfExpenses?
            <div className="content_expenses-grid">
                <div>
                    <img src="" alt="Logo" />
                </div>
                <div className="cont">
                    <TotalExpenses
                        filteredMonth={filteredMonth}
                    />
                    <div className="date-margin">
                        <DateSelector
                            onFilteredMonth={filteredMonthHandler}
                        />
                    </div>
                </div>
                <div className="history_text">History</div>
                <div className="history-container">
                    <ExpenseHistory
                        monthFilter={filteredMonth}
                    />
                </div>
            </div> //: <p>loading...</p>
        );
    };

    return (
        ProtectedPage()
    );
}

export default Expenses;