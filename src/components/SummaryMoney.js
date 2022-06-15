import { useState, useEffect } from 'react';
import Axios from 'axios';

import './SummaryMoney.css';

const SummaryMoney = ({totalExpenses, totalIncomes}) => {


    return (
        <div className="totalGroup">
            <div className="totalBudget">
                <div className="title">Total Budget</div>
                <div className="budgetAmount amount">€{totalIncomes}</div>
            </div>
            <div className="totalExpenses">
                <div className="title">Total expenses</div>
                <div className="amount">€{totalExpenses}</div>
            </div>
        </div>
    );
};

export default SummaryMoney;