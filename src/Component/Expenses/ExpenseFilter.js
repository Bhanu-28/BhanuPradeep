import React from 'react'
import FilterYear from './FilterYear'
import './ExpenseFilter.css'

function ExpenseFilter(props) {

    return (
        <div className='ExpenseFilter'>
            <h2>Filter by year</h2>
            <FilterYear getYear={(e) => props.getFilter(e)} sendYear={props.sendSelectedYear} />

        </div>
    )
}

export default ExpenseFilter