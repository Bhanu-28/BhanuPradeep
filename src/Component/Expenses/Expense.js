import React, { useState } from 'react'
import './Expense.css'
import ExpenseList from './ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import ExpenseLists from './ExpenseLists'
import ExpenseChart from './ExpenseChart'

function Expense(props) {
    // console.log(props.sendExpense)

    const [selectedYear, setSelectedYear] = useState('2021')

    const showExpenseFilter = (e) => {
        setSelectedYear(e)
    }

    const FilteredYearList = props.sendExpense.filter((e) => {
        return e.date.getFullYear().toString() === selectedYear;
    })


    return (
        <div className='Expense'>
            <ExpenseFilter getFilter={showExpenseFilter} sendSelectedYear={selectedYear} />
            <ExpenseChart expenses={FilteredYearList} />
            <ExpenseLists items={FilteredYearList} />
        </div>
    )
}

export default Expense