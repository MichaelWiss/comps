import React from 'react';
import Button from "./Button";

function App() {
    return (
     <div>
        <div>
            <Button success rounded outline>Click Me!</Button>
        </div>
        <div>
            <Button danger outline>Buy Now</Button>
        </div>
        <div>
            <Button warning>See Deal</Button>
        </div>
        <div>
            <Button secondary outline>Subscribe</Button>
        </div>
    </div>
    );
}

export default App;