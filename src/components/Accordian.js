import Accordian from './components/Accordian';

function App() {
    const items = [
        {
            label: 'Can I use React on a project',
            content: 'You can use React on any project you want'
        },
        {
            label: 'Can I use Javascript on a project',
            content: ''
        },
        {
            label: 'Can I use CSS on a project',
            content: ''
        },
    ];
   
  return <Accordian />
}

export default App;