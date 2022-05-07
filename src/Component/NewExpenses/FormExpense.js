import React, { useState } from 'react'
import './FormExpense.css'

function FormExpense(props) {

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    const changeText = (e) => {
        setTitle(e.target.value)
    }
    const changeNum = (e) => {
        setAmount(e.target.value)
    }
    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        setTitle('')
        setAmount('')
        setDate('')
        const data = {
            title: title,
            date: new Date(date),
            amount: amount,
            id: Math.random().toString()
        }
        props.getData(data)
    }
    return (
        <form>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={changeText} required />
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input type="number" value={amount} onChange={changeNum} required />
            </div>
            <div>
                <label htmlFor="">date</label>
                <input type="date" value={date} onChange={changeDate} required />
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button onClick={SubmitHandler}>add expense</button>
            </div>
        </form>
    )
}

export default FormExpense