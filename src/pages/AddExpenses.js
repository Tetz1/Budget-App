import { useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '@mui/material/Slider';

import './AddExpenses.css';

const AddExpenses = (props) => {

    const marks = [
        {
          value: 2,
          label: "Low",
        },
        {
          value: 4,
          label: "Medium",
        },
        {
          value: 6,
          label: "High",
        }
    ];

    function valuetext(value) {
        return `${value}`;
    };
      
    function valueLabelFormat(label) {
        return marks.findIndex((mark) => mark.label === marks.label);
    };

    
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredImportancy, setEnteredImportancy] = useState("Medium");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    };

    let importancyLevel = 4;
    let importancy;
    const importancyChangeHandler = (event) => {
        importancyLevel = event.target.value;
        switch (importancyLevel) {
            case 2: 
                importancy = "Low";
                break;
            case 4: 
                importancy = "Medium";
                break;
            case 6: 
                importancy = "High";
                break;
        }
        setEnteredImportancy(importancy);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: Math.random(),
            date: new Date(),
            amount: enteredAmount,
            description: enteredDescription,
            category: enteredCategory,
            importancy: enteredImportancy
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDescription("");
    };
    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="number" placeholder="Enter amount here" min={0.01} step={0.01} value={enteredAmount} onChange={amountChangeHandler} required /><br/>
                <input type="text" placeholder="Enter description" maxLength={75} value={enteredDescription} onChange={descriptionChangeHandler} required />
                <div>
                    <b>Choose category</b>
                </div>
                <div>
                    <label for="food">Food</label>
                    <input type="radio" id="food" name="category" value="Food" onChange={categoryChangeHandler} />
                </div>
                <div>
                    <label for="bills">Bills</label>
                    <input type="radio" id="bills" name="category" value="Bills" onChange={categoryChangeHandler} />
                </div>
                <div>
                    <label for="leisure">Leisure</label>
                    <input type="radio" id="leisure" name="category" value="Leisure" onChange={categoryChangeHandler} />
                </div>
                <div>
                    <label for="debts">Debts</label>
                    <input type="radio" id="debts" name="category" value="Debts" onChange={categoryChangeHandler} />
                </div>
                <div>
                    <b>Choose importance</b>
                </div>
                <div>
                    <Slider
                        aria-label="Restricted values"
                        defaultValue={4}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        step={null}
                        valueLabelDisplay={marks.label}
                        marks={marks}
                        max={7}
                        min={1}
                        onChange={importancyChangeHandler}
                        className="slider"
                    />
                </div>
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddExpenses;