import React, { useState } from 'react'
import FormExpense from './FormExpense'
import './NewExpense.css'

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const showData = (e) => {
        props.getDataA(e)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className='newExpense'>
            {isEditing && (
                <FormExpense getData={showData} onCancel={stopEditingHandler} />
            )}
            {!isEditing && (
                <button onClick={startEditingHandler}>Add Expenses</button>
            )}
        </div>
    )
}

export default NewExpense