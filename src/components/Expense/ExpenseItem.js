import { MdFastfood } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaCircle } from 'react-icons/fa';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const expenseDate = new Date(props.date);
    const month = expenseDate.toLocaleString("en-US", { month: "long" });
    const expenseDescription = props.description;
    const expenseCategory = props.category;
    const expenseAmount = props.amount;
    //const expenseImportancy = props.importancy;

    const setCategoryIcon = () => {
        switch (expenseCategory) {
            case "783cd8bf-5d2a-4159-b889-4980601e4d37":
                return <MdFastfood className="icon_food" />
            case "f51559db-61f4-4432-b8ad-660b58cb5d0c":
                return <RiBillFill className="icon_bills" />
            case "8699d2dd-7e37-4a54-9411-1ff0433ce782":
                return <BiDrink className="icon_leisure" />
            case "f9686fe2-0528-42ee-b882-9b6bb6a85048":
                return <GiTakeMyMoney className="icon_debts" />
        };
    };

    /*const setImportancyIcon = () => {
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
    };*/

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
                {//<div className="importancy">{setImportancyIcon()}</div>
}
            </div>
        </div>
    );
};

export default ExpenseItem;