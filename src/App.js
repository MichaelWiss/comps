import Button from "./Button";

function App() {
    return (
     <div>
        <div>
            <Button primary>Click Me!</Button>
        </div>
        <div>
            <Button danger outline>Buy Now</Button>
        </div>
        <div>
            <Button>See Deal</Button>
        </div>
        <div>
            <Button>Subscribe</Button>
        </div>
    </div>
    );
}

export default App;