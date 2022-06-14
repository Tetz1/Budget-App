import './SummaryMoney.css';

const SummaryMoney = (props) => {
    
    return (
        <div className="totalGroup">
            <div className="totalBudget">
                <div className="title">Total Budget</div>
                <div className="budgetAmount amount">€{props.totalIncomes}</div>
            </div>
            <div className="totalExpenses">
                <div className="title">Total expenses</div>
                <div className="amount">€{props.totalExpenses}</div>
            </div>
        </div>
    );
};

export default SummaryMoney;