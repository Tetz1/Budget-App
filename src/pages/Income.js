import { useState } from "react";

import TotalIncome from "../components/Income/TotalIncome";
import DateSelector from "../components/DateSelector";
import IncomeHistory from "../components/Income/IncomeHistory";

import './Income.css';

const Income = (props) => {

    const currMonth = new Date().toLocaleString("en-US", { month: "long" });
    const [filteredMonth, setFilteredMonth] = useState(currMonth);

    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };
 
    let totalIncomeAmount = 0;
    props.incomes.map(incomes => (
        totalIncomeAmount = totalIncomeAmount + incomes.amount
    ));

    return (
        <div className="content">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="cont">
                <TotalIncome totalIncomeAmount={totalIncomeAmount} />
                <DateSelector onFilteredMonth={filteredMonthHandler} />
            </div>
            <IncomeHistory incomes={props.incomes} monthFilter={filteredMonth} />
        </div>
    );
};

export default Income;