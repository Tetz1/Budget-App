import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

import './CircleProgressbar.css';

const CircleProgressbar = () => {

    const [value, setValue] = useState(0);

    return (
        <div className="circularprogress">
            <CircularProgress
                value={50}
                variant={"determinate"}
            />
        </div>
    );
};

export default CircleProgressbar;