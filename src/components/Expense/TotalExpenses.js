import { Link } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './TotalExpenses.css';

const TotalExpenses = (props) => {

    return (
        <div className="card">
            <div className="box box1">
                <div className="label">Expenses</div>
                <div className="amount">€{props.totalExpenses}</div>
            </div>
            <div className="box"></div>
            <div className="box box2">
                <Link to="/expenses/add" className="btn_redirect">
                    <AiOutlinePlusCircle className="btn_addExpense" />
                </Link>
            </div>
        </div>
    );
};

export default TotalExpenses;