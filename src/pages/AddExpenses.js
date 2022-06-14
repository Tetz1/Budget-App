import { useState, useRef } from 'react';
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

    
    const amountInputRef = useRef();
    const descriptionInputRef = useRef();

    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredImportancy, setEnteredImportancy] = useState("Medium");

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
        const enteredAmount = amountInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const expenseData = {
            id: Math.random(),
            date: new Date(),
            amount: enteredAmount,
            description: enteredDescription,
            category: enteredCategory,
            importancy: enteredImportancy
        };

        props.onSaveExpenseData(expenseData);
        amountInputRef.current.value = "";
        descriptionInputRef.current.value = "";
    };
    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="number"
                    placeholder="Enter amount here"
                    min={0.01}
                    step={0.01}
                    ref={amountInputRef}
                    required
                /><br/>
                <input
                    type="text"
                    placeholder="Enter description"
                    maxLength={75}
                    ref={descriptionInputRef}
                    required
                />
                <div>
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
                </div>
                <div>
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
                </div>
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddExpenses;