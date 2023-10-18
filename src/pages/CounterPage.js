import { useState, useEffect } from 'react';

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);
}

export CounterPage;