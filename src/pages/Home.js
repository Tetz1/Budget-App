import React from 'react';
import { useState } from 'react';

import DateSelector from '../components/DateSelector';
import SummaryMoney from '../components/SummaryMoney';
import CircleProgressbar from '../components/CircleProgressbar';

import './home.css';

function Home(props) {

    const [totalExpenses, setTotalExpenses] = useState(0);

    const filteredMonthHandler = (filteredMonth) => {
        console.log(filteredMonth);
        totalExpensesHandler();
    };

    const totalExpensesHandler = () => {
        setTotalExpenses(props.totalExpenses);
        console.log(totalExpenses);
    };

    return (
        <div>
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="welcome">
                Hello, Name Surname
            </div>
            <div className="dateSelector">
                <DateSelector onFilteredMonth={filteredMonthHandler} />
            </div>
            <div className="summaryMoney">
                <SummaryMoney totalExpenses={props.totalExpenses} />
            </div>
            <div>
                <CircleProgressbar />
            </div>
        </div>
    );
}

export default Home;