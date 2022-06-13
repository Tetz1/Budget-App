import IncomeItem from './IncomeItem';

import './IncomeHistory.css';

const ExpenseHistory = (props) => {

    const incomes = props.incomes;
    const filteredMonth = props.monthFilter;

    const filteredIncomes = incomes.filter(income => (
        income.date.toLocaleString("en-US", { month: "long" }) === filteredMonth
    ));

    return (
        <div className="income_history">
            {filteredIncomes.map((incomes) => (
                <IncomeItem
                    key={incomes.id}
                    date={incomes.date}
                    amount={incomes.amount}
                    description={incomes.description}
                />
            ))}
        </div>
    );
};

export default ExpenseHistory;