import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseList.css'

function ExpenseList(props) {

    const deleteHandler = () => {
        props.getId(props.id)
    }
    return (
        <div className='ExpenseList'>
            <ExpenseDate
                date={props.date}
            />
            <div>{props.title}</div>
            <div>{props.amount}</div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default ExpenseList