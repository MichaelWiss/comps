
import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';



function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [value, setValueToAdd] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value);

        console.log(typeof value);
    };

    return (
    <Panel className="m-3">
        <h1 className="text-lg">Count is {count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}>
                Increment
            </Button>
            <Button onClick={decrement}>
                Decrement
            </Button>
        </div>

        <form action="">
            <label htmlFor="">Add a lot!</label>
            <input 
                value={valueToAdd}
                onChange={handleChange}
                type="number" 
                className='p-1 m-3 bg-gray-50 border border-gray-300'/>
            <Button>Add It!</Button>
        </form>
    </Panel>
    )
}

export default CounterPage;