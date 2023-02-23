
import React, {useState} from 'react';
import ExpensesList from './ExpensesList.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart.js';


function Expenses(props){

const[FilteredYear,setFilteredYear] =useState('2020');

const filterChangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
}

const filteredExpenses= props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === FilteredYear;
});


    return(
    
    <div className="expenses">
        <ExpensesFilter
         selected={FilteredYear}
        onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

    </div>
    );
}

export default Expenses;
