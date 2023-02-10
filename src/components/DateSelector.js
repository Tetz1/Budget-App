import { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import './DateSelector.css';

function DateSelector({onFilteredMonth}) {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currDate = new Date();
    const dayOfWeek = weekdays[currDate.getDay()];
    const day = currDate.getDate();
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;

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
                    <option value={1} id={months[0]}>{months[0]}</option>
                    <option value={2} id={months[1]}>{months[1]}</option>
                    <option value={3} id={months[2]}>{months[2]}</option>
                    <option value={4} id={months[3]}>{months[3]}</option>
                    <option value={5} id={months[4]}>{months[4]}</option>
                    <option value={6} id={months[5]}>{months[5]}</option>
                    <option value={7} id={months[6]}>{months[6]}</option>
                    <option value={8} id={months[7]}>{months[7]}</option>
                    <option value={9} id={months[8]}>{months[8]}</option>
                    <option value={10} id={months[9]}>{months[9]}</option>
                    <option value={11} id={months[10]}>{months[10]}</option>
                    <option value={12} id={months[11]}>{months[11]}</option>
                </select>
            </div>
            <div className="alignLeft currentDate">
                {dayOfWeek} {day}, {year}
            </div>
        </div>
    );
}

export default DateSelector;