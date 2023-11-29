
import { useState } from 'react';
import Button from '../components/Button';



function CounterPage({ initialCount }) {
    const [count, setCount] = useState();
    

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