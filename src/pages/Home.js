import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DateSelector from '../components/DateSelector';
import SummaryMoney from '../components/SummaryMoney';
import CircleProgressbar from '../components/CircleProgressbar';
import ExpenseCategories from '../components/ExpenseCategories';

import './home.css';

function Home() {

  const userToken = localStorage.getItem("user");


  const currMonth = new Date().getMonth() + 1;
  const [filteredMonth, setFilteredMonth] = useState(currMonth);

  const filteredMonthHandler = (month) => {
    setFilteredMonth(month);
  };


  const [totalExpenses, setTotalExpenses] = useState();
  const [totalIncomes, setTotalIncomes] = useState();
  const [expensesByCategory, setExpensesByCategory] = useState();

  const callFetchData = "https://budgetapp.digitalcube.rs/api/transactions/statistics?year="+new Date().getFullYear()+"&month="+filteredMonth;
  const callUserCheck = "https://budgetapp.digitalcube.rs/api/tenants/6c931dbf-ae44-4e90-9d7b-537ec6cea122/session";


  

  useEffect(() => {
    const FetchTotalIncomes = () => {
      fetch(callFetchData, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setTotalIncomes(data.income);
        setTotalExpenses(data.outcome);
        setExpensesByCategory(data.by_category);
      })
      .catch(error => {
        console.error(error);
      })
    }
    FetchTotalIncomes();
  }, [filteredMonth])


  
  const ProtectedPage = () => {
    const [username, setUsername] = useState();
    const [loading, setLoading] = useState(true);
    const [isTokenValid, setIsTokenValid] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!userToken) {
        return navigate('/login');
      } else {
        fetch(callUserCheck, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        .then(response => {
          if (response.status === 200) {
            setLoading(false);
            setIsTokenValid(true);
          } else {
            return navigate('/login');
          }
        })
        .catch(error => {
          console.error(error);
        });
      }
    }, [navigate]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!isTokenValid) {
      return <div>Unauthorized</div>;
    }
  
    return (
      <div className="content_home-grid">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <div className="welcome">
          Hello, {username}
        </div>
        <div className="dateSelector">
          <DateSelector onFilteredMonth={filteredMonthHandler} />
        </div>
        <div className="summaryMoney">
          <SummaryMoney totalExpenses={totalExpenses} totalIncomes={totalIncomes} />
        </div>
        <CircleProgressbar totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
        <div>
          Expense categories
        </div>
        <ExpenseCategories
        />
      </div>
    );
  };


  return (
    ProtectedPage()
  )
};

export default Home;