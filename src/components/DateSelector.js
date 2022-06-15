import { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import './DateSelector.css';

function DateSelector({onFilteredMonth}) {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currDate = new Date();
    let dayOfWeek = weekdays[currDate.getDay()];
    let day = currDate.getDate();
    let year = currDate.getFullYear();
    let month = months[currDate.getMonth()];

    const [monthFilter, setMonthFilter] = useState(month);

    const monthFilterHandler = (event) => {
        event.preventDefault();

        setMonthFilter(event.target.value);
        onFilteredMonth(event.target.value);
    }

    return (
        <div className="date">
            <div className="monthDrpdwn alignLeft">
                <select value={monthFilter} className="drpdwnMenu" name="monthFilter" id="monthFilter" onChange={monthFilterHandler}>
                    <option value={months[0]} id={months[0]}>{months[0]}</option>
                    <option value={months[1]} id={months[1]}>{months[1]}</option>
                    <option value={months[2]} id={months[2]}>{months[2]}</option>
                    <option value={months[3]} id={months[3]}>{months[3]}</option>
                    <option value={months[4]} id={months[4]}>{months[4]}</option>
                    <option value={months[5]} id={months[5]}>{months[5]}</option>
                    <option value={months[6]} id={months[6]}>{months[6]}</option>
                    <option value={months[7]} id={months[7]}>{months[7]}</option>
                    <option value={months[8]} id={months[8]}>{months[8]}</option>
                    <option value={months[9]} id={months[9]}>{months[9]}</option>
                    <option value={months[10]} id={months[10]}>{months[10]}</option>
                    <option value={months[11]} id={months[11]}>{months[11]}</option>
                </select>
            </div>
            <div className="alignLeft">
                {dayOfWeek} {day}, {year}
            </div>
        </div>
    );
}

export default DateSelector;