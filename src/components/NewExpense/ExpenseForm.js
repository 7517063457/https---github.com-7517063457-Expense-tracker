import react, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
const [enteredTitle,setEnteredTitle]= useState('');
const [enteredAmount,setEnteredAmount]= useState('');
const [enteredDate,setEnteredDate]= useState('');

   
 const titleChangeHandler = (event)=>{
       setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    };
 const submitHandler = (event)=>{
    event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className=" new-expense__controls">
            <div className=" new-expense__control">
                <lable>Title</lable>
                <input type='text' 
                value={enteredTitle}
                 onChange={titleChangeHandler} />
                </div>
                <div className=" new-expense__control">
                <lable>Amount</lable>
                <input type='number' 
                min='0.01' step='0.01' 
                value={enteredAmount} 
                onChange={amountChangeHandler} />
                </div>
                <div className=" new-expense__control">
                <lable>Date</lable>
                <input type='date' 
                min="2019-12-31" max="2022-12-31"
                 value={enteredDate} 
                 onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" 
                 onClick={props.onCancle}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );

}
export default ExpenseForm;