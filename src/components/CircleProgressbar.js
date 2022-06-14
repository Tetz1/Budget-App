import CircularProgress from '@mui/material/CircularProgress';

import './CircleProgressbar.css';

const CircleProgressbar = (props) => {

    const totalIncomes = props.totalIncomes;
    const totalExpenses = props.totalExpenses;
    const remainingBalance = (totalIncomes - totalExpenses).toFixed(2);

    let proportion;
    if (totalIncomes > 1) {
        proportion = (remainingBalance / totalIncomes) * 100;
    }
    else {
        proportion = 0;
    }

    return (
        <div className="circularprogress">
            <div className="remaining_balance__container">
                <div className="remaining_balance__text">Remaining balance</div>
                <div className="remaining_balance">€{remainingBalance}</div>
            </div>
            <CircularProgress
                value={proportion}
                variant={"determinate"}
                size={175}
                thickness={3}
                className={"circularProgress1"}
            />
            <CircularProgress
                value={100}
                variant={"determinate"}
                size={175}
                thickness={3}
                className="circularProgress2"
            />
        </div>
    );
};

export default CircleProgressbar;