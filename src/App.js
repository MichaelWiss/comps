import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';
import React from 'react';
import Button from "./Button";

function App() {
    return (
     <div>
        <div>
            <Button secondary outline rounded>
                <GoBell />
                Click Me!
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoDownload />
                 Buy Now
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                 See Deal
            </Button>
        </div>
        <div>
            <Button secondary outline>Subscribe</Button>
        </div>
        <div>
            <Button primary rounded>Something</Button>
        </div>
    </div>
    );
}

export default App;