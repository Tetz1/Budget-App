import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DateSelector from "../components/DateSelector";
import ExpenseHistory from '../components/Expense/ExpenseHistory';
import TotalExpenses from '../components/Expense/TotalExpenses';

import './Expenses.css';

const Expenses = (props) => {

    const currMonth = new Date().toLocaleString("en-US", { month: "long" });
    const [filteredMonth, setFilteredMonth] = useState(currMonth);
    const [totalExpenses, setTotalExpenses] = useState(0);

    const filteredMonthHandler = (month) => {
        setFilteredMonth(month);
    };

    const totalExpensesHandler = (getTotalExpenses) => {
        setTotalExpenses(getTotalExpenses);
        props.getTotalExpenses(totalExpenses);
    };
    

    return (
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
                expenses={props.expenses}
                monthFilter={filteredMonth}
                getTotalAmount={totalExpensesHandler}
            />
        </div>
    );
}

export default Expenses;