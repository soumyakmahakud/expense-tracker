import React from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
// import Card from './Card';
function Expenses(props) {
    return (
        <div className="expenses">

            {
                props.Item.map(
                    expense => (
                        <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />
                    )
                )
            }

            {/* <ExpenseItem date={props.Item[0].date} title={props.Item[0].title} amount={props.Item[0].amount} />
            <ExpenseItem date={props.Item[1].date} title={props.Item[1].title} amount={props.Item[1].amount} />
            <ExpenseItem date={props.Item[2].date} title={props.Item[2].title} amount={props.Item[2].amount} />
            <ExpenseItem date={props.Item[3].date} title={props.Item[3].title} amount={props.Item[3].amount} /> */}
        </div>
    );
}
export default Expenses;