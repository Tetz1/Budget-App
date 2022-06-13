import './IncomeItem.css';

const IncomeItem = (props) => {

    const incomeDate = new Date(props.date);
    const incomeDay = incomeDate.getDate();
    const incomeMonth = incomeDate.toLocaleString("en-US", { month: "long" });
    const incomeAmount = props.amount;
    const incomeDescription = props.description;

    return (
        <div className="containerInc">
            <div className="cellInc">
                <div className="date_day">{incomeDay}</div>
                <div className="date_month">{incomeMonth}</div>
            </div>
            <div className="cellInc">
                <div className="descriptionInc">{incomeDescription}</div>
                <div className="amount_income">${incomeAmount}</div>
            </div>
        </div>
    );
};

export default IncomeItem;