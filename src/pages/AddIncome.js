import { useState } from 'react';
import { Link } from 'react-router-dom';

import './AddIncome.css';

const AddIncome = (props) => {

    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const incomeData = {
            id: Math.random(),
            date: new Date(),
            amount: enteredAmount,
            description: enteredDescription
        };
        props.onSaveIncomeData(incomeData);

        setEnteredAmount("");
        setEnteredDescription("");
    };

    return (
        <div className="cont-all">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <div className="cont-grid">
                <div className="">
                    <Link to="/income">
                        +
                    </Link>
                </div>
                <div className="">Add incomes</div>
            </div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter amount here" value={enteredAmount} onChange={amountChangeHandler} required /><br/>
                <input type="text" placeholder="Enter description" value={enteredDescription} onChange={descriptionChangeHandler} required /><br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddIncome;