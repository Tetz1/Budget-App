import { Link } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './TotalIncome.css';

const TotalIncome = (props) => {

    let totalIncomeAmount = props.totalIncomeAmount;

    return (
        <div className="card">
            <div className="box box1">
                <div className="label">Income</div>
                <div className="amount">${totalIncomeAmount}</div>
            </div>
            <div className="box"></div>
            <div className="box box2">
                <Link to="/income/add" className="btn_redirect">
                    <AiOutlinePlusCircle className="btn_addExpense" />
                </Link>
            </div>
        </div>
    );
};

export default TotalIncome;