import { useState } from 'react';

import ExpenseItem from './ExpenseItem';


const ExpenseHistory = (props) => {

    const expenses = props.expenses;
    const filteredMonth = props.monthFilter;

    const filteredExpenses = expenses.filter(expense => (
        expense.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));

    return (
        <div className="">
            {filteredExpenses.map((expense) => (                
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    category={expense.category}
                    amount={expense.amount}
                    description={expense.description}
                    importancy={expense.importancy}
                />
            ))}
        </div>
    );
};

export default ExpenseHistory;