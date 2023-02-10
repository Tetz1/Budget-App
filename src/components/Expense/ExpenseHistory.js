import { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';


const ExpenseHistory = (props) => {

    const userToken = localStorage.getItem("user");
    const callFetchData = "https://budgetapp.digitalcube.rs/api/transactions";

    const [totalItems, setTotalItems] = useState();
    const [transactions, setTransactions] = useState();


    useEffect(() => {
        const GetData = async () => {
            await fetch(callFetchData, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setTotalItems(data.summary.total_items);
                setTransactions(data.transactions);
            })
            .catch(error => {
                console.error(error);
            })
        }
        GetData();
    }, [props.monthFilter])


    const food = "783cd8bf-5d2a-4159-b889-4980601e4d37";
    const bills = "f51559db-61f4-4432-b8ad-660b58cb5d0c";
    const leisure = "8699d2dd-7e37-4a54-9411-1ff0433ce782";
    const debts = "f9686fe2-0528-42ee-b882-9b6bb6a85048";

    const [expenses, setExpenses] = useState();

    useEffect(() => {
        if (transactions) {
            const formattedMonthFilter = String(props.monthFilter).padStart(2, "0");

            const transactionsSelectedMonth = transactions.filter(transaction => {
                const transactionMonth = transaction.created.split("-")[1];
                return transactionMonth === formattedMonthFilter;
            });

            setExpenses(
                transactionsSelectedMonth.filter(transaction => {
                    const category = transaction.category;
                    return category === food || category === bills || category === leisure || category === debts;
                })
            );
        }
    }, [transactions]);


    const MapExpenses = () => {
        if (expenses) {
            return (
                expenses.map((expense) => (                
                    <ExpenseItem
                        key={expense.id}
                        date={expense.created}
                        category={expense.category}
                        amount={expense.amount}
                        description={expense.description}
                        //importancy={expense.importancy}
                    />
                ))
            )
        }
    }

    return (
        <div className="">
            {MapExpenses()}
        </div>
    );
};

export default ExpenseHistory;