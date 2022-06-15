import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import DateSelector from '../components/DateSelector';
import SummaryMoney from '../components/SummaryMoney';
import CircleProgressbar from '../components/CircleProgressbar';

import './home.css';

function Home(props) {

    const userToken = localStorage.getItem("user");
    const currDate = new Date();
    const [totalExpenses, setTotalExpenses] = useState();
    const call_getTotalExpenses = "https://budgetapp.digitalcube.rs/api/transactions/statistics";

    const fetchData = async () => {
        try {
            const response = await Axios.get(call_getTotalExpenses, {
                headers: {
                    "Authorization": `Bearer ${userToken}`
                },
                params: {
                    year: currDate.getFullYear(),
                    month: currDate.getMonth() + 1
                }
            })

            const {data} = response;
            setTotalExpenses(data.outcome);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);




    let navigate = useNavigate();
    const LoggedIn = localStorage.getItem("user");

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
    
    let totalExpenses1 = 0;
    filteredExpenses.map((expense) => (
        totalExpenses1 += parseFloat(expense.amount)
    ));


    // To get the total incomes
    const filteredIncomes = incomes.filter(income => (
        income.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));
    
    let totalIncomes = 0;
    filteredIncomes.map((income) => (
        totalIncomes += parseFloat(income.amount)
    ));


    useEffect(() => {
       if (!LoggedIn){
          return navigate("/login");
       } 
    },[LoggedIn]);

    return (
        <div className="content">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="welcome">
                Hello, {}
            </div>
            <div className="dateSelector">
                <DateSelector onFilteredMonth={filteredMonthHandler} />
            </div>
            <div className="summaryMoney">
                <SummaryMoney totalExpenses={totalExpenses} totalIncomes={totalIncomes.toFixed(2)} />
            </div>
            <CircleProgressbar totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
        </div>
    );
};

export default Home;