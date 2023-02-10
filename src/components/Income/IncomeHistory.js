import { useEffect, useState } from 'react';

import IncomeItem from './IncomeItem';

import './IncomeHistory.css';

const IncomeHistory = (props) => {

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


    const salaryID = "e5548520-24de-4646-8e94-2eb9f251dbee";

    const [incomes, setIncomes] = useState();
    
    useEffect(() => {
        if (transactions) {
            const formattedMonthFilter = String(props.monthFilter).padStart(2, "0");

            const transactionsSelectedMonth = transactions.filter(transaction => {
                const transactionMonth = transaction.created.split("-")[1];
                return transactionMonth === formattedMonthFilter;
            });

            setIncomes(
                transactionsSelectedMonth.filter(transaction => {
                    const category = transaction.category;
                    return category === salaryID;
                })
            );
        }
    }, [transactions]);

    
    const MapIncomes = () => {
        if (incomes) {
            return (
                incomes.map((incomes) => (
                    <IncomeItem
                        key={incomes.id}
                        date={incomes.created}
                        amount={incomes.amount}
                        description={incomes.description}
                    />
                ))
            )
        }
    }
    
    return (
        <div className="income_history">
            {MapIncomes()}
        </div>
    );
};

export default IncomeHistory;