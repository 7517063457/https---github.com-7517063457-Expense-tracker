import Expenses from './components/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
import React,{useState} from 'react';

const DUMMY_EXPENSES=[
  {
  id:'e1',
  title:'Car Washing',
  amount:676,
  date:new Date(2022, 8,3),
},
{
  id:'e2',
  title:'car insurance',
  amount:6767,
  date:new Date(2021,5 ,12),
},
{id:'e3',
title:'Car Buffing',
amount:7868,
date:new Date(2020, 2,12),
},
{id:'e4',
title:'Car Paper',
amount:67,
date:new Date(2021, 11,18),
},
];

const App = () =>
 {
const [expenses,setExpenses]= useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) =>{
  setExpenses((prevExpenses) =>{
    return[expense, ...prevExpenses];
  });
};


  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      </div>
  );
};

export default App ;
