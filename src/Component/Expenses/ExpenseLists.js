import React from 'react'
import ExpenseList from './ExpenseList'
import './ExpenseLIsts.css'

function ExpenseLists(props) {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <ul className='expense-list'>
            {
                props.items.map((e) =>
                    <ExpenseList
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                )

            }

        </ul>
    )
}

export default ExpenseLists