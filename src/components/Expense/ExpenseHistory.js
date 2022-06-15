import { useState } from 'react';

import ExpenseItem from './ExpenseItem';


const ExpenseHistory = ({expenses, monthFilter}) => {


    const filteredExpenses = expenses.filter(expense => (
        expense.created.toLocaleString("en-US", { month: "long" }) === monthFilter
    ));

    return (
        <div className="">
            {filteredExpenses.map((expense) => (                
                <ExpenseItem
                    key={expense.id}
                    date={expense.created}
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