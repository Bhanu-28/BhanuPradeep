import React, { useState } from 'react'
import './App.css'
import Expense from './Component/Expenses/Expense'
import NewExpense from './Component/NewExpenses/NewExpense'

const Initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Bhanu Desk (Wooden)',
    amount: 280,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [oldExpense, SetOldExpense] = useState(Initial_expenses)

  const showDataA = (e) => {
    SetOldExpense((E) => {
      return [e, ...E]
    })
  }

  return (
    <div className='Main'>
      <NewExpense getDataA={showDataA} />
      <Expense sendExpense={oldExpense} />
    </div>
  )
}

export default App