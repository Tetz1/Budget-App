import { useState, useEffect } from 'react';
import Axios from 'axios';

import DateSelector from "../components/DateSelector";
import ExpenseHistory from '../components/Expense/ExpenseHistory';
import TotalExpenses from '../components/Expense/TotalExpenses';

import './Expenses.css';

const Expenses = ({expenses}) => {
    const userToken = localStorage.getItem("user");
    const [listOfExpenses, setListOfExpenses] = useState();
    const call = "https://budgetapp.digitalcube.rs/api/transactions"

    const fetchData = async () => {
        try {
            const response = await Axios.get(call, {
                headers: {
                    "Authorization": `Bearer ${userToken}`
                }
            })
            console.log(response);

            const data = response.transactions;
            setListOfExpenses(data);
            console.log(expenses);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const currMonth = new Date().toLocaleString("en-US", { month: "long" });
    const [filteredMonth, setFilteredMonth] = useState(currMonth);

    const filteredExpenses = expenses.filter(expense => (
        expense.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));


    // Get total expenses
    let totalExpenses = 0;
    filteredExpenses.map((expense) => (
        totalExpenses += parseFloat(expense.amount)
    ));


    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };


    return (
        // listOfExpenses?
        <div className="content">
            <div>
                <img src="" alt="Logo" />
            </div>
            <div className="cont">
                <TotalExpenses
                    totalExpenses={totalExpenses}
                />
                <DateSelector
                    onFilteredMonth={filteredMonthHandler}
                />
            </div>
            <ExpenseHistory
                expenses={expenses}
                monthFilter={filteredMonth}
            />
        </div> //: <p>loading...</p>
    );
}

export default Expenses;