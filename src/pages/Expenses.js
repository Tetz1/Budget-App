import { useState } from 'react';

import DateSelector from "../components/DateSelector";
import ExpenseHistory from '../components/Expense/ExpenseHistory';
import TotalExpenses from '../components/Expense/TotalExpenses';

import './Expenses.css';

const Expenses = (props) => {

    const expenses = props.expenses;
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
        </div>
    );
}

export default Expenses;