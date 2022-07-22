import { useState } from 'react';

const Button = () => {
    const [date, setDate] = useState(0);

    function handleClick() {
        setDate(new Date().getFullYear());
    }

    return (
        <button onClick={handleClick}>{date}</button>
    );
};

export default Button;
