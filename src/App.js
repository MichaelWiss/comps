import Dropdown from './components/Dropdrown';
function App() {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]


    return <Dropdown options={options} />;
}

export default App;