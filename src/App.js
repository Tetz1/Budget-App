import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Redirect } from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddExpenses from './pages/AddExpenses';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import AddIncome from './pages/AddIncome';
import Account from './pages/Account';
import Savings from './pages/Savings';

import './App.css';

/*
    Category ID's:
    Bills - 7224a0c0-3d7c-42b4-817a-aa8bfc210ae0
    Food - 6d98d71e-0809-4dda-9d41-7a208de7c9ee
    Leisure - 476a72bb-0ccc-4721-b0e6-14087f0358f7
    Debts - a0fec36b-b872-4a0b-a88b-c5e1e822f740
*/

const App = () => {

    //const loggedIn = localStorage.getItem("user");
    
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/login" element={<LoginPage  />} />
                    <Route path="/register" element={<RegisterPage />} />
                    
                    <Route path="/" element={
                        <>
                        <Home />
                        <Navbar />
                        </>
                    } />
                    <Route path="/expenses/add" element={
                        <>
                        <AddExpenses />
                        <Navbar />
                        </>
                    } />
                    <Route path="/expenses" element={
                        <>
                        <Expenses />
                        <Navbar />
                        </>
                    } />
                    <Route path="/income" element={
                        <>
                        <Income />
                        <Navbar />
                        </>
                    } />
                    <Route path="/income/add" element={
                        <>
                        <AddIncome />
                        <Navbar />
                        </>
                    } />
                    <Route path="/account" element={
                        <>
                        <Account  />
                        <Navbar />
                        </>
                    } />
                    <Route path="/savings" element={
                        <>
                        <Savings  />
                        <Navbar />
                        </>
                    } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;