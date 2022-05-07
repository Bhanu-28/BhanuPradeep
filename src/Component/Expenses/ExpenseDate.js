import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {

    const date = props.date.getDate();
    const month = props.date.toLocaleString('default', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className='ExpenseDate'>
            <div>{year}</div>
            <div>{month}</div>
            <div>{date}</div>
        </div>
    )
}

export default ExpenseDate