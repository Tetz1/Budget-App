import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './AddIncome.css';

const AddIncome = (props) => {

    const amountInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const incomeData = {
            id: Math.random(),
            date: new Date(),
            amount: enteredAmount,
            description: enteredDescription
        };
        props.onSaveIncomeData(incomeData);

        amountInputRef.current.value = "";
        descriptionInputRef.current.value = "";
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
                <input
                    type="text" 
                    placeholder="Enter amount here"
                    ref={amountInputRef}
                    required
                /><br />
                <input
                    type="text"
                    placeholder="Enter description"
                    ref={descriptionInputRef}
                    required
                /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddIncome;