import { useState, useEffect } from "react";
import Axios from 'axios';

import TotalIncome from "../components/Income/TotalIncome";
import DateSelector from "../components/DateSelector";
import IncomeHistory from "../components/Income/IncomeHistory";

import './Income.css';
import { useParams } from "react-router-dom";

const Income = ({incomes}) => {

    const userToken = localStorage.getItem("user");
    const [listOfIncomes, setListOfIncomes] = useState();
    const call = "https://budgetapp.digitalcube.rs/api/transactions/statistics"

    const fetchData = async () => {
        try {
            const response = await Axios.get(call, {
                headers: {
                    "Authorization": `Bearer ${userToken}`
                },
                params: {
                    year: currDate.getFullYear(),
                    month: currDate.getMonth() + 1
                }
            })
            console.log(response);

            const {data} = response;
            setListOfIncomes(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const currDate = new Date();
    const currMonth = new Date().toLocaleString("en-US", { month: "long" });
    const [filteredMonth, setFilteredMonth] = useState(currMonth);

    const filteredIncomes = incomes.filter(income => (
        income.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));


    // Get total expenses
    let totalIncomes = 0;
    filteredIncomes.map((income) => (
        totalIncomes += parseFloat(income.amount)
    ));


    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };

    return (
        <div className="content">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="cont">
                <TotalIncome totalIncomes={totalIncomes} />
                <DateSelector onFilteredMonth={filteredMonthHandler} />
            </div>
            <IncomeHistory incomes={incomes} monthFilter={filteredMonth} />
        </div>
    );
};

export default Income;