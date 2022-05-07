import React from 'react'


function FilterYear(props) {
    const showYear = (e) => {
        props.getYear(e.target.value)
    }
    return (
        <div>
            <select value={props.sendYear} onChange={showYear}>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
}

export default FilterYear