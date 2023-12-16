import React, { useState } from "react"
import Expenses from "./Components/Expenses"
import NewExpense from "./Components/NewExpenses/NewExpense"

let expensesList = [
  {
    id:"e1",
     date : new Date(2024, 0, 1),
     title : "Sample Fee",
     amount : 0.01,
  }

  
]

const App = () => {

  const [expenses , setExpenses] = useState(expensesList)



const addexpenseHandler = (expense) =>{
  const updatedExpense = [expense, ...expenses];  
  setExpenses(updatedExpense);
}

  return (
    <div>
     <NewExpense onAddExpense = {addexpenseHandler} />
      <Expenses Item={expenses}/>
          </div>
  )
}

export default App
