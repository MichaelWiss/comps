import { useState } from 'react';

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderdOptions = options.map((option) => {
        return <div key={option.value}>
            {option.label}
        </div>
    });
    return <div>
        <div>Select...</div>
        <div>{renderdOptions}</div>
    </div>;
}

export default Dropdown;