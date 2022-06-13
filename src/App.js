import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddExpenses from './pages/AddExpenses';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import AddIncome from './pages/AddIncome';

import './App.css';


const dummyExpenses = [
    {
        id: 1,
        date: new Date(2022, 4, 1),
        category: "Food",
        amount: 62,
        description: "Restaurant",
        importancy: "Medium"
    },
    {
        id: 2,
        date: new Date(2022, 4, 10),
        category: "Bills",
        amount: 21.2,
        description: "Light bill",
        importancy: "High"
    },
    {
        id: 3,
        date: new Date(2022, 4, 21),
        category: "Leisure",
        amount: 150,
        description: "Skydiving",
        importancy: "Low"
    },
    {
        id: 4,
        date: new Date(2022, 5, 5),
        category: "Debts",
        amount: 50,
        description: "Car loan",
        importancy: "High"
    }
];

const dummyIncomes = [
    {
        id: 1,
        date: new Date(2022, 5, 5),
        description: "Salary",
        amount: 50
    },
    {
        id: 2,
        date: new Date(2022, 5, 5),
        description: "Salary",
        amount: 5000
    },
    {
        id: 3,
        date: new Date(2022, 5, 5),
        description: "Salary",
        amount: 3333
    },
    {
        id: 4,
        date: new Date(2022, 5, 5),
        description: "Salary",
        amount: 69420
    }
];

const App = () => {

    const [expenses, setExpenses] = useState(dummyExpenses);
    const [incomes, setIncomes] = useState(dummyIncomes);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncomes, setTotalIncomes] = useState(0);

    const saveExpenseDataHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    const saveIncomeDataHandler = (income) => {
        setIncomes((prevIncomes) => {
            return [income, ...prevIncomes];
        });
    };

    const getTotalExpensesHandler = (totalExpense) => {
        setTotalExpenses(totalExpense);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={
                        <>
                        <Home totalExpenses={totalExpenses} />
                        <Navbar />
                        </>
                    } />
                    <Route path="/expenses/add" element={
                        <>
                        <AddExpenses onSaveExpenseData={saveExpenseDataHandler} />
                        <Navbar />
                        </>
                    } />
                    <Route path="/expenses" element={
                        <>
                        <Expenses
                            expenses={expenses}
                            getTotalExpenses={getTotalExpensesHandler}
                        />
                        <Navbar />
                        </>
                    } />
                    <Route path="/income" element={
                        <>
                        <Income incomes={incomes} />
                        <Navbar />
                        </>
                    } />
                    <Route path="/income/add" element={
                        <>
                        <AddIncome onSaveIncomeData={saveIncomeDataHandler} />
                        <Navbar />
                        </>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;