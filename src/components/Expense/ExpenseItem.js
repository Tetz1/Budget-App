import { MdFastfood } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { FcDebt } from 'react-icons/fc';
import { FaCircle } from 'react-icons/fa';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const expenseDate = new Date(props.date);
    const month = expenseDate.toLocaleString("en-US", { month: "long" });
    const expenseDescription = props.description;
    const expenseCategory = props.category;
    const expenseAmount = props.amount;
    const expenseImportancy = props.importancy;

    const setCategoryIcon = () => {
        switch (expenseCategory) {
            case "Food":
                return <MdFastfood className="icon_food" />
            case "Bills":
                return <RiBillFill className="icon_bills" />
            case "Leisure":
                return <BiDrink className="icon_leisure" />
            case "Debts":
                return <FcDebt className="icon_debts" />
        };
    };

    const setImportancyIcon = () => {
        switch (expenseImportancy) {
            case "Low":
                return (
                    <>
                    Low<br/>
                    <FaCircle className="importancy_low" />
                    </>
                )
            case "Medium":
                return (
                    <>
                    Med<br/>
                    <FaCircle className="importancy_med" />
                    </>
                )
            case "High":
                return (
                    <>
                    High<br/>
                    <FaCircle className="importancy_high" />
                    </>
                )
        };
    };

    return (
        <div className="containerExp">
            <div className="cellExp">
                <div className="dateItem">
                    {expenseDate.getDate()}
                    <div className="dateMonth">{month}</div>
                </div>
            </div>
            <div className="cellExp">
                <div className="category_icon">{setCategoryIcon()}</div>
            </div>
            <div className="cellExp">
                <div className="description">{expenseDescription}
                    <div className="amountExpense">€{expenseAmount}</div>
                </div>
            </div>
            <div className="cellExp">
                <div className="importancy">{setImportancyIcon()}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;