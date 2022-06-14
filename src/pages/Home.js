import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import DateSelector from '../components/DateSelector';
import SummaryMoney from '../components/SummaryMoney';
import CircleProgressbar from '../components/CircleProgressbar';

import './home.css';

function Home(props) {

    const expenses = props.expenses;
    const incomes = props.incomes;

    const currMonth = new Date().toLocaleString("en-US", { month: "long" });
    const [filteredMonth, setFilteredMonth] = useState(currMonth);

    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };


    // To get the total expenses
    const filteredExpenses = expenses.filter(expense => (
        expense.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));
    
    let totalExpenses = 0;
    filteredExpenses.map((expense) => (
        totalExpenses += parseFloat(expense.amount)
    ));


    // To get the total incomes
    const filteredIncomes = incomes.filter(income => (
        income.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));
    
    let totalIncomes = 0;
    filteredIncomes.map((income) => (
        totalIncomes += parseFloat(income.amount)
    ));


    return (
        <>
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="welcome">
                Hello, Name Surname
            </div>
            <div className="dateSelector">
                <DateSelector onFilteredMonth={filteredMonthHandler} />
            </div>
            <div className="summaryMoney">
                <SummaryMoney totalExpenses={totalExpenses.toFixed(2)} totalIncomes={totalIncomes.toFixed(2)} />
            </div>
            <CircleProgressbar totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
        </>
    );
}

export default Home;