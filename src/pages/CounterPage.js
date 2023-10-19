import { useState, useEffect } from 'react';
import Button from '../components/Button';

function useNumber(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment,
    };
}

function CounterPage({ initialCount }) {
    const { count, increment } = useNumber(initialCount);

    return (
    <div>
        <h1>Count is {count}</h1>
        <Button onClick={increment}>
            Increment
        </Button>
    </div>
    )
}

export default CounterPage;