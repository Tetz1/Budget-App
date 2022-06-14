import { useState } from "react";

import TotalIncome from "../components/Income/TotalIncome";
import DateSelector from "../components/DateSelector";
import IncomeHistory from "../components/Income/IncomeHistory";

import './Income.css';

const Income = (props) => {

    const incomes = props.incomes;
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
            <IncomeHistory incomes={props.incomes} monthFilter={filteredMonth} />
        </div>
    );
};

export default Income;